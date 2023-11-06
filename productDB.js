require("dotenv").config()

const connectDB = require("./db/connect")
const Product = require("./models/product")
const ProductJson = require("./products.json")

const start = async () => {
    try {
        console.log("data is success")
        // connect to db 
        await connectDB(process.env.MONOGODB_URL)
        // to delte mu;ltiple or extra data 
        await Product.deleteMany()
        // Product check data requirements  from models/products and match data in ProductJson and create and send  data to mongo db  
        await Product.create(ProductJson)
    }
    catch (error) {
        console.log("error")
    }
}

start()