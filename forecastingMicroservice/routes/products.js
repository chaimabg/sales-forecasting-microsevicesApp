var express = require('express');
var router = express.Router();
const Product=require('../models/Product');


router.get('/', async (req, res) => {
    try{
        console.log("get users");
        const users = await Product.find();

        res.status(200).send(users);
    }catch (error) {
        res.status(500).send({'error message':error})
    }
});
router.post('/',async (req,res)=>{

    try{
        const product = req.body;
        console.log(product);

        const newProduct = new Product({
            productName: product.productName,
            productId : product.productId,
            sales : product.sales,
            store: product.store ,
            description : product.description
        });
        const result = await newProduct.save();
        res.status(200).send(result);
    }catch (e) {
        res.status(500).send({'error message': error})
    }
});

module.exports = router;
