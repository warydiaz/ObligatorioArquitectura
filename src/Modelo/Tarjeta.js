class Tarjeta { 
    constructor(numero, vencimiento,nombreTitular,codigoSeguridad){
        this.numero = numero;
        this.vencimiento = vencimiento;
        this.nombreTitular = nombreTitular;
        this.codigoSeguridad = codigoSeguridad;
    }
}
module.exports = Tarjeta;