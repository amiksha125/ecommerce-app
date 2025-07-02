import mongoose from "mongoose";

//create schema
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true},
    cartData: {type: Object, default: {}}, //by default provide empty object
}, {minimize: false})//so that when user created empty cartData obj is created

// create model 

const userModel = mongoose.model.user || mongoose.model("user", userSchema)

export default userModel;