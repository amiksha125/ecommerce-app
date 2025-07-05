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
    
    console.log( name, description, priceNum, category, subCategory, sizes, bestseller );
    console.log( image1, image2, image3, image4);

    res.json({})
    
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