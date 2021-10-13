const express = require ('express');
const app = express();
var cors = require('cors')
const router = express.Router();
const sequelize = require('../database/db')
const bodyParser = require('body-parser')
const Product = require('../database/models/Producto');

const hostname = '127.0.0.1';
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.use('/', require('./routes/produc'))

/*app.post('/pro', (req, res) =>{

    Product.create(
       req.body
    ).then(product =>{
        res.json(product);
    })
});*/

//router.listen(port, ()=>{
app.listen(port, ()=>{
    sequelize.sync({force:true}).then(()=>{
        console.log('nos hemos conectado a la Base DAtos');
    }).catch((error) =>{ console.log ('EL ERROR ES: ', error);
    });
    
})
 