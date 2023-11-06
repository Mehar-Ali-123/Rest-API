
const product = require("../models/product")

const getALlProducts = async (req, res) => {
    const { company, name, feature, price, sort, select } = req.query;
    const queryObject = {}
    if (company) {
        queryObject.company = company
    }
    if (feature) {
        queryObject.feature = feature
    }
    if (price) {
        queryObject.price = price
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }
    let apiData = product.find(queryObject)
    // for sort MEthod 

    // if (sort) {
    //     let sortFix = sort.split(",").join(" ");
    //     apiData = apiData.sort(sortFix)
    // }


    // for Select MEthod 
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }
    // pagination 
   const  page =  Number(req.query.page) || 1 ;
   const limit = Number(req.query.limit) || 3 ;
const skip = Number(page - 1 ) * limit;  
    console.log("data", queryObject)

    const productData = await apiData.skip(skip).limit(limit)
    // const productData = await apiData

    res.status(200).json({ productData ,numberOfData :productData.length });
}

const getALlProductsTesting = async (req, res) => {
    const productData = await product.find(req.query);
    res.status(200).json({ productData ,numberOfData :productData.length  });
}

module.exports = { getALlProducts, getALlProductsTesting };