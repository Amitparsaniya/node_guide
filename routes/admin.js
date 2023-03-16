const express =require("express")
const { getAddProduct, postAddProduct, getProducts, getAdminProducts, getEditProduct, postEditProduct, postDeleteProduct } = require("../controllers/admin")


const adminroute =express.Router()


adminroute.get("/add-product",getAddProduct)
adminroute.get("/products",getProducts)

adminroute.post("/admin/add-product",postAddProduct)
adminroute.get("/Admin-Product",getAdminProducts)
adminroute.get("/edit-Product/:productId",getEditProduct)
adminroute.post("/admin/edit-Product",postEditProduct)
adminroute.post("/admin/delete-Product",postDeleteProduct)




module.exports =adminroute
