import express from 'express';
import { addToCart, updateCart, getUserCartData }  from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';


const cartRouter = express.Router();

//create endpoints with the imported functions

cartRouter.post('/get', authUser, getUserCartData);
cartRouter.post('/add', authUser, addToCart);
cartRouter.post('/update', authUser, updateCart);

export default cartRouter;
