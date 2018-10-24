class Producto {
    constructor(nombre,categoria){
        this.nombre = nombre;
        this.categoria=categoria;
    }
};
exports.crearProducto = function (calle, numero,ciudad,pais,codigoPostal) {
    var producto = new Producto(calle, numero,ciudad,pais,codigoPostal);
        return producto;
    }
