//let express = require('express');
let compra = require('./src/Modelo/Compra.js');
let tarjeta = require('./src/Modelo/Tarjeta.js');
let direccionEnvio = require('./src/Modelo/DireccionEnvio.js');
let producto = require('./src/Modelo/Producto.js');
let mongoose = require('./src/Persistencia/MongoDBConeccion.js');
//let tePagoYa = express();

//comercio.use(bodyparser.json());
//comercio.use(bodyparser.urlencoded({ extended: true }))

//services(tePagoYa);
    this.compra=new compra(
    this.tarjeta= new tarjeta(1111,'12/10/2018','nombreTitular',1234),
    this.direccionEnvio= new direccionEnvio('Calle',1234,'Ciudad','Pais',1234),
    123,'12/12/2018',
    this.producto=new producto('NombreProducto','Categoria')
    ,1);
/*const server = tePagoYa.listen(4000,() => {
    console.log('Hello world');
})
*/