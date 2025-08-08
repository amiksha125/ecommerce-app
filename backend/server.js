import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000   //if PORT available in .env else use 4000
connectDB()
connectCloudinary()


// Middlewares
app.use(express.json()) //request will get pass using json
app.use(cors()) //we can access the package from any IP

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log("Server started on port: ", port)
})

console.log('MONGODB_URI =', process.env.MONGODB_URI);
