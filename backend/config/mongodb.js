import mongoose from "mongoose";

const connectDB = async () => {

    //when mongodb connection is established this func is executed
    mongoose.connection.on('connected', () => {
        console.log("connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce?retryWrites=true&w=majority`)
}

export default connectDB;