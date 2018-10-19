let direccionEnvio = require('./DireccionEnvio');
let producto = require('./Producto');
let tarjeta= require('./Tarjeta');

class Compra { 
    constructor(tarjeta,direccionEnvio,monto,fechaTransaccion,producto,cantidad){
        this.tarjeta = tarjeta;
        this.direccionEnvio=direccionEnvio;
        this.direccionFacturacion=direccionEnvio;
        this.monto=monto;
        this.fechaTransaccion=fechaTransaccion;
        this.producto=producto;
        this.cantidad = cantidad;
    }
}

module.exports = Compra;