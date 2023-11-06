require("dotenv").config();

const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000;
const PRODUCT_ROUTES = require("./routes/products")
const connectDB = require("./db/connect")


app.get("/", (req, res) => {
    res.send("Hi, i am live")
})

app.use("/api/products",PRODUCT_ROUTES)

const start = async () => {
    try {
        await connectDB(process.env.MONOGODB_URL)
        app.listen(PORT, () => {
            console.log(`${PORT} YES I AM CONNECTED`)
        })
    }
    catch (error) {
        console.log(error)
    }
}

start()