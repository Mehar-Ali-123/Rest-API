const express = require("express")

const router = express.Router();
const {getALlProducts,getALlProductsTesting}= require("../controllars/products")


router.route("/").get(getALlProducts);
router.route("/testing").get(getALlProductsTesting);


module.exports = router