const mongoose = require("mongoose")
 
const connectDB = (uri) => {
    console.log("yes db is accessed")
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB