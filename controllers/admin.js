const Product =require("../models/product")


// const products = [];

// res.render("add-product",{pageTitle: 'Add Product'})
exports.getAddProduct =(req,res,next)=>{
    res.render("admin/edit-product",{
        pageTitle:"Add Product",
        path:"/admin/add-product",
        editing : false

    })
}

exports.postAddProduct =(req,res,next)=>{
    try{
        // const {title,imageUrl,price,description} = req.body
        const title =req.body.title
        const imageUrl =req.body.imageUrl
        const price =req.body.price
        const description =req.body.description     
        // console.log(req.body);
        const prodcut = new Product(null,title,imageUrl,price,description)
        prodcut.save()
                // res.render("add-product")
        // product.push({title,imageUrl,description,price}),
        // constructor(title,imageUrl,price,description){
        // console.log(prodcut),
        // console.log(prodcut.title)
        // console.log(prodcut.imageUrl),
        // console.log(prodcut.description),
        // console.log(prodcut.price), //

        res.redirect("/")
    }catch(e){
        console.log(e);
    }
}

exports.getEditProduct = async(req,res,next)=>{
    const EditMode =req.query.edit
    // console.log(/data/ + EditMode);
    if(!EditMode){
       return res.redirect("/")
    }
    const Id = await req.params.productId
    // console.log(Id);
    const  product  = await Product.findById(Id)
    // console.log(product);
    if(!product){
    //    return res.redirect("/")
    }
    res.render("admin/edit-product",{
        pageTitle:"Edit Product",
        path:"/admin/edit-product",
        editing: EditMode,
        product:product
    })
}

exports.getProducts =async(req,res,next)=>{
   const p = await Product.fetchAll()
//    console.log(p);
        res.render("admin/products",{
            prods:p,
    })
    
}
exports.getAdminProducts =async(req,res,next)=>{
   const p=await Product.fetchAll()
//    console.log(p);
       res.render("admin/products",{
           prods:p,
   })
}

exports.postEditProduct =  (req,res,next)=>{
    try{

        const updatedId = req.body.productId
        const updatedTitle =req.body.title
        console.log(updatedTitle);
        const updatedimageUrl =req.body.imageUrl
        const updatedprice =req.body.price
        const updateddescription =req.body.description

       const updatedproduct = new Product(updatedId,updatedTitle,updatedimageUrl,updatedprice,updateddescription)
        console.log(/data/ + JSON.stringify(updatedproduct));
         updatedproduct.save()
        // console.log(/product/+updatedprodu1ct);
        
        res.redirect("/products")
    }catch(e){
        console.log(e);
    }
   
}

exports.postDeleteProduct =(req,res,next)=>{
    const Id  = req.body.productId
      Product.deleteByyId(Id)
      res.redirect("/products")
}
// exports.home = (req,res)=>{
//    res.render("home")
// }