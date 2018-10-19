const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let direccionEnvio = require('./DireccionEnvio');
let producto = require('./Producto');
let tarjeta= require('./Tarjeta');

let compraEsquema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tarjeta = [tarjetaEsquema],
    direccionEnvio = [direccionEnvioEsquema],
    direccionFacturacion = [direccionEnvioEsquema],
    monto = {type: Number, required: true},
    fechaTransaccion = {type: Date, required: true},
    producto = [productoEsquema],
});

let tarjetaEsquema = new Schema({
    numero = {type: Number, required: true, max: 16},
    vencimiento={type: Date, required: true},
    nombreTitular={type: String, required: true},
    codigoSeguridad={type: Number, required: true},
});
let productoEsquema = new Schema({
    nombre = {type: String, required: true},
    categoria={type: String, required: true},
});

let direccionEnvioEsquema = new Schema({
    numero = {type: number, required: true},
    ciudad={type: String, required: true},
    pais={type: String, required: true},
    codigoPostal = {type: number, required: true}
});

// Export the model
module.exports = mongoose.model('Compra', compraEsquema);
module.exports = mongoose.model('Tarjeta', tarjetaEsquema);
module.exports = mongoose.model('Producto', productoEsquema);