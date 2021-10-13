const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Producto extends Model {}

Producto.init({
    // pendiente ID
    descripcion:DataTypes.STRING,
    cantidad:DataTypes.INTEGER,
    valor:DataTypes.DOUBLE,
    estado:DataTypes.STRING

}, {
    sequelize,
    modelName: "Producto"
    });

module.exports = Producto;
