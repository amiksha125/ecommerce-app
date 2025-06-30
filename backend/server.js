import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// App Config
const app = express()
const port = process.env.PORT || 4000   //if PORT available in .env else use 4000

// Middlewares
app.use(express.json()) //request will get pass using json
app.use(cors()) //we can access the package from any IP

// API endpoints
app.get('/', (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log("Server started on port: ", port)
})