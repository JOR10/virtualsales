const express = require ('express');
const router = express.Router();
const Product = require('../../database/models/Producto');

router.post('/producto', (req, res) =>{
       console.log('req', req.body);
       Product.create(
       req.body
       ).then(product => {
       res.json(product);
       })
       });

router.get('/geT',(req,res)=>{
    Product.findAll().then(produc =>{
        res.json(produc);
    })
});


module.exports = router;