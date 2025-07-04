import multer from "multer";

// create storage 
const storage = multer.diskStorage({
    filename: function(req, file, callback){
        callback(null, file.originalname)
    }
})

//using this disk storage create one upload middleware
const upload = multer({storage});

export default upload