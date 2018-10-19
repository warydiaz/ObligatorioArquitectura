class DireccionEnvio {
    constructor(calle, numero,ciudad,pais,codigoPostal){
        this.calle = calle;
        this.numero = numero;
        this.ciudad = ciudad;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
    }
};

module.exports = DireccionEnvio;