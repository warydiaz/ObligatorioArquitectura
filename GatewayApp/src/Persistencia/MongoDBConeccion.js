const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const compraEsquema= require('../Modelo/CompraEsquema.js');



exports.Conectar =   function (){ 
mongoose.Promise = global.Promise;

 mongoose.connect(
    'mongodb://localhost:27017/dbGaasyncteway',
    { useNewUrlParser: true },).then(() => {
    console.log(`Connección a la base exitosa`);
  }).catch(() => {
    console.log('Error al conectar a la base');
  });
}

//Estos dos metodos moverlos a un aquete controlador
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

exports.cerrarLotes = function(fecha){
    var comprasAuxiliar = mongoose.model('Compra');
    var variable=comprasAuxiliar.countDocuments();
    console.log(variable);
}




