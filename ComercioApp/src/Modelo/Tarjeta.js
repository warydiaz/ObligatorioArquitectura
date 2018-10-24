
class Tarjeta {
    constructor(numero, vencimiento,nombreTitular,codigoSeguridad){
        this.numero = numero;
        this.vencimiento = vencimiento;
        this.nombreTitular = nombreTitular;
        this.codigoSeguridad = codigoSeguridad;
    }
};
exports.crearTarjeta = function (numero, vencimiento,nombreTitular,codigoSeguridad) {
    var tarjeta = new Tarjeta(numero, vencimiento,nombreTitular,codigoSeguridad);
        return tarjeta;
    }


   
