import { v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';
//four functions 
//function for adding product
const addProduct = async (req, res) => {
// before addProduct function create a multer middleware, so that if we send any file as form data then this will send using multer
try{
  
    const { name, description, price, category, subCategory, sizes, bestseller} = req.body;
    console.log(req.body);
    const priceNum = Number(price);
    const image1 =  req.files.image1  && req.files.image1[0];
    const image2 =  req.files.image2  && req.files.image2[0];
    const image3 =  req.files.image3  && req.files.image3[0];
    const image4 =  req.files.image4  && req.files.image4[0];

    //create array of images
    //if item is not undefined then only store it
    const images = [image1, image2, image3, image4].filter(item => item !== undefined);
  
    //upload images array in cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
        return result.secure_url;
      })
    )
    
    console.log(name, description, priceNum, category, subCategory, sizes, bestseller );
    console.log(images);
    console.log(imagesUrl);

    const productData = {
      name,
      description,
      price: priceNum,
      image: imagesUrl,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === 'true' ? true : false,
      date: Date.now()
    }
   
    console.log(productData);

    const product = new productModel(productData);

    await product.save();

    res.json({success: true, message: "product added"})
    
}catch(err){

  console.log(err); 
   res.json({success: false, message: err.message})
}

     
}

//function to list products
const listProduct = async (req, res) => {
     
}

//function to remove product
const removeProduct = async (req, res) => {
     
}

//function for single product info
const singleProduct = async (req, res) => {
     
}

export {listProduct, addProduct, removeProduct, singleProduct}