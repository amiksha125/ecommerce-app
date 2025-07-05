import mongoose from "mongoose";

//schema is a structure using that we can create data base
//Define schema
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    sizes: {type: Array, required: true},
    bestseller: {type: Boolean},
    date: {type: Number, required: true}
})

//create model
const productModel = mongoose.models.product || mongoose.model("product", productSchema)

//the model will be created once, and if its already available then its used, singleton

export default productModel;