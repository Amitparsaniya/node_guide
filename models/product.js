const path =require("path")
const fs =require('fs')
const Cart = require("./cart")

const p =path.join(path.dirname("nodejs_guide"),"data","products.json")

const getProductsFromFile = () =>{
        const file = JSON.parse(fs.readFileSync(p))

        return file
}

module.exports = class Product {
    constructor(id,title,imageUrl,price,description){
        this.id=id
        this.title =title,
        this.imageUrl =imageUrl,
        this.price = price,
        this.description =description
    }
    save(){
        const data =  getProductsFromFile()
        if(this.id){
            // const product =  data.find(prod=>prod.id===data.id)
            // console.log(product);
                const existingproductIndex = data.findIndex(prod=>prod.id===this.id)
                const updatedproduct =[...data]
                updatedproduct[existingproductIndex] =this
                fs.writeFile(p,JSON.stringify(updatedproduct),(err)=>{
                    console.log(err);
                })
            }else{

                this.id = Math.random().toString()
                data.push(this)
                fs.writeFile(p,JSON.stringify(data),(err)=>{
                    console.log(err);
                })
                
            }
        
      
    }

    static async deleteByyId(id){
        const data = await getProductsFromFile()
        if(!data){
            return ;
        }
        const prodcut =  data.find(p=>p.id===id)
        const newproduct = data.filter(prod=>prod.id !== id)
        fs.writeFile(p,JSON.stringify(newproduct),err=>{
            console.log(/err/,err);
            if(!err){
                console.log("fire");
                Cart.deleteProduct(id,prodcut.price)
                console.log(/id/,id);
            }
        })
    }

    static fetchAll(){
        return getProductsFromFile();
    }

    static async findById(id){

     const data = await getProductsFromFile()
     
        const product = data.find( p => p.id === id)
        return product
    }
}

