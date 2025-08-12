import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
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
        //Save the orders 
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