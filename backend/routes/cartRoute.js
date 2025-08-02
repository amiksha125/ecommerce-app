import express from 'express';
import { addToCart, updateCart, getUserCartData }  from '../controllers/cartController.js';

const cartRouter = express.Router();

//create endpoints with the imported functions

cartRouter.post('/get', getUserCartData);
cartRouter.post('/add', addToCart);
cartRouter.post('/update', updateCart);

export default cartRouter;
