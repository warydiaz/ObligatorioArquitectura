let direccionEnvio = require('./DireccionEnvio');
let producto = require('./Producto');
let tarjeta= require('./Tarjeta');

class Compra { 
    constructor(tarjeta,direccionEnvio,monto,fechaTransaccion,producto,cantidad){
        this.tarjeta = tarjeta;
        this.direccionEnvio=direccionEnvio;
        this.direccionFacturacion=direccionEnvio;//por defecto es la de envio
        this.monto=monto;
        this.fechaTransaccion=fechaTransaccion;
        this.producto=producto;
        this.cantidad = cantidad;
    }
}
exports.crearCompra = function (tarjeta, direccionEnvio,monto,fechaTransaccion,producto,cantidad) {
    var compra = new Compra(tarjeta, direccionEnvio,monto,fechaTransaccion,producto,cantidad);
        return compra;
    }