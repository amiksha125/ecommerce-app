
// Placing orders using Cash On Delivery method 
const placeOrder = async (req, res) => {
    
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