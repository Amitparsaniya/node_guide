const express =require("express");
const {  getProducts, getIndex, getcart, checkout, getorder, getProduct, postcart, postCardDeleteItem } = require("../controllers/shop");

const router = express.Router()
// console.log(router);


// router.get("/add-product",getAddProduct)
// router.post("/add-product",postAddProduct)
router.get("/",getIndex)
router.get("/product",getProducts)
router.get("/product/:productId",getProduct)
router.get("/cart",getcart)

router.post("/cart",postcart)
router.post("/cart-delete-item",postCardDeleteItem)

router.get("/order",getorder)

router.get("/check-out",checkout)

// router.get("/",)




module.exports =router
