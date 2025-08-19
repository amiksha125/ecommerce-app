// import { currency } from "../../admin/src/App.jsx";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

//global variables
const currency = 'USD';
const deliveryCharge = 10

// initialize gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing orders using Cash On Delivery method 
const placeOrder = async (req, res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        //Create and Save the orders 
        const newOrder = new orderModel(orderData);
        await newOrder.save();
       //Clear the cart data from user Id 
        await userModel.findByIdAndUpdate(userId, { cartData: {}});

        res.json( {success: true, message: "Order Placed"});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
        
    }
    
}
// Placing orders using Stripe method 
const placeOrderStripe = async (req, res) => {

    try {
        
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers; //origin is the frontend url from where u send request
      
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map( (item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name : item.name,
                },
                unit_amount: item.price * 100
            },

            quantity: item.quantity
        }))

        line_items.push( {
            price_data: {
                currency: currency,
                product_data: {
                    name : 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },

            quantity: 1
        } )

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        })

        res.json({success: true, session_url: session.url})


    } catch (error) {
         console.log(error);
        res.json({ success: false, message: error.message })
    }

}
// Placing orders using Razorpay method 
const placeOrderRazorpay = async (req, res) => {

}

//All orders data for admin panel
const allOrders = async (req, res) => {
 try {
    
    const orders = await orderModel.find({}); // {} means I want all orders
    res.json({ success: true, orders})
 } catch (error) {
     console.log(error);
     res.json({ success: false, message: error.message })
 }

}

//User order data for frontend
//display user orders on frontend in my orders page
const userOrders = async (req, res) => {
    try {
        const { userId } = req.body;
        const orders = await orderModel.find({ userId });
        res.json( {success: true, orders})
        
    } catch (error) {
         console.log(error);
         res.json({ success: false, message: error.message })
    }

}

//Update order status -> to change order status
//only admin can update this status
const updateStatus = async (req, res) => {
    try {

        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, {status} );
        res.json({success: true, message: "Status Updated"})
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}