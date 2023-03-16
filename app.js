const express= require("express")
const  bodyparser= require("body-parser")
const  productroute= require("./routes/shop")
const adminroute =require("./routes/admin")
const path =require("path")
const fs =require("fs")
const app =express()

const pathdir =path.join(__dirname,"views")

app.use(bodyparser.json())
// app.use(express.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,"views")))
app.use(productroute)
app.use(adminroute)



const dir=path.join(path.dirname("/node_guide/models"))
console.log(dir);


app.set("view engine","pug")
app.set("views","views")

// const products = [];


// app.get("/",(req,res)=>{
//     res.render("home")
//     // res.sendFile(`${pathdir}/home.html`)
// })
// app.get("/shop",(req,res)=>{
//     res.render("shopp" )
// })
//     // res.sendFile(`${pathdir}/shop.html`)
// })
// app.get("/add-product",(req,res)=>{
//         // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
//         res.render("add-product",{pageTitle: 'Add Product'})
//         // res.sendFile(`${pathdir}/add_product.html`)
   
// })
// app.post("/add-product",(req,res,next)=>{
//     products.push({ title:req.body.title })
//     console.log(products);
//     console.log(products[0].title)
//     res.redirect("/shop")
// })
app.get("*",(req,res)=>{    
    // res.sendFile(`${pathdir}/404.html`)
    res.render("404",{pageTitle:"Page not found!"})
    // setTimeout(()=>{ 
    //     res.redirect("/")
    //     console.log("called!");
    // },4000)
})

app.listen(5000,()=>{
    console.log("your server is up on the server 5000")
})