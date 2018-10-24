const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const compraEsquema= require('../Modelo/CompraEsquema.js');
const gatewayEsquema= require('../Modelo/CategoriaCompraGatewayEsquema.js');


exports.Conectar = function(){ 
// Mongoose Configuration
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost:27017/dbComercio',
    { useNewUrlParser: true },).then(() => {
    console.log(`Connección a la base exitosa`);
  }).catch(() => {
    console.log('Error al conectar a la base');
  });
}

exports.guardarCompra = function(compraAGuardar){
    const esquemaAuxiliar = new compraEsquema(compraAGuardar);
    esquemaAuxiliar.save(function(error,respuesta){
        if (error) {
            console.log(error);
        }
        else{
            console.log(respuesta);
        }
    });
}
exports.guardarGateway = function(gatewayAGuardar){
    const esquemaAuxiliar = new gatewayEsquema(gatewayAGuardar);
    esquemaAuxiliar.save(function(error,respuesta){
        if (error) {
            console.log(error);
        }
        else{
            console.log(respuesta);
        }
    });
}
exports.buscarGatewayPorCategoria = function(categoria){
    var gatewayAuxiliar = mongoose.model('CategoriaCompraGatewayEsquema');
    gatewayAuxiliar.findOne({ 'categoriaCompra': categoria}, 'nombreGateway', function (err, gateway) {
        if (err) return handleError(err);
        console.log('Gateway:'+ gateway.nombreGateway);
      });
}




/*
const GuardarTarjeta = function( a/*ca pasari aun json con los datos tarjetaAguardar){
    console.log('Entramos');
    const tarjetaAGuardar={numero:1234,vencimiento:'12/12/2018',nombreTitular:'Nombre',codigoSeguridad:1234}
    
    const esquemaprueba = new tarjetaEsquema(tarjetaAGuardar);
    esquemaprueba.save(function(error,respuesta){
        if (error) {
            console.log(error);
        }
        else{
            console.log(respuesta);
        }
    });
}


*/
//module.exports = mongoose.model('Compra', compraEsquema);
//module.exports = mongoose.model('Tarjeta', tarjetaEsquema);
//module.exports = mongoose.model('Producto', productoEsquema);
//module.exports = mongoose.model('DireccionEnvioEsquema', direccionEnvioEsquema);




