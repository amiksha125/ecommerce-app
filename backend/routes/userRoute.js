import express from 'express'
import {loginUser, registerUser, adminLogin} from '../controllers/userController.js'

const userRouter = express.Router();
//whenever the route is /register then registerUser func is executed.Very easy
userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.post('/admin', adminLogin);

export default userRouter;
