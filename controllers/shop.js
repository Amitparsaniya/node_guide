const Product =require("../models/product")
const Cart  =require("../models/cart")

exports.getProducts = async(req,res,next)=>{
    try{
       const data =await Product.fetchAll()
            res.render("shop/product-list",{
                prods:data,
                pageTitle: 'All Products',
                path: '/products'
            })
        
    }catch(e){
        console.log(e);
    }
}
exports.getProduct = async(req,res,next)=>{
  const Id = await req.params.productId
 const prodcut =await Product.findById(Id)


 console.log(/prodcut/, prodcut);

res.render("shop/product-detail",{pageTitle:prodcut.title,product:prodcut})
}

exports.getIndex= async(req,res,next)=>{
    const prodcuts = await Product.fetchAll();
    res.render("shop/index",{
        prods:prodcuts,
    })
}

exports.getcart= async (req,res,next)=>{
     const cartproduct=  await Cart.getCartProducts()
     const productdata  = await Product.fetchAll()

     const prodcuts = productdata.filter(p=>p.id!==cartproduct.id)
     console.log(/data/,prodcuts);
   
    res.render("shop/cart",{
        pageTitle:"Your Cart",
        prods:prodcuts,
        })
}
exports.postcart= async (req,res,next)=>{
    const productId = req.body.productId
   const data= await Product.findById(productId)
   console.log(data);
        Cart.addproduct(productId,data.price)
    
    console.log(productId);
    console.log(data.price);
    // console.log(productId);
    res.render("shop/cart")
}
exports.getorder= (req,res,next)=>{
    res.render("shop/Orders",{
            pageTitle:"Your order"
    
    })
}
exports.postCardDeleteItem =(req,res,next)=>{
    const prodId = req.body.productId

    const data =  Product.findById(prodId)
    Cart.deleteProduct(prodId,data.price)
    res.redirect('/cart')
    console.log(/data/,data);

}



exports.checkout= (req,res,next)=>{
    res.render("shop/check-out",{
            pageTitle:"Your Check-out"
    
    })
}