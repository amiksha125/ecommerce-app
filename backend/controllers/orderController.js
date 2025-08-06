import orderModel from "../models/orderModel";
import userModel from "../models/userModel";
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


}

//User order data for frontend
//display user orders on frontend in my orders page
const userOrders = async (req, res) => {

}

//Update order status -> to change order status
//only admin can update this status
const updateStatus = async (req, res) => {

}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}