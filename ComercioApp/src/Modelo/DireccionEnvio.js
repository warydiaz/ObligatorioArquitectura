class DireccionEnvio {
    constructor(calle, numero,ciudad,pais,codigoPostal){
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
    }
};
exports.crearDireccionEnvio = function (calle, numero,ciudad,pais,codigoPostal) {
    var direccionEnvio = new DireccionEnvio(calle, numero,ciudad,pais,codigoPostal);
        return direccionEnvio;
    }