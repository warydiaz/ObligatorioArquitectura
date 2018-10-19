let faker = require("faker");
let compra = require("../Model/Compra.js");
let compra = require("../Model/Tarjeta.js");

const appRouter = app =>{
  app.put("/compra", (req, res) => {
    //const {  } = req.params;
    let compra = new Compra(
        tarjeta = new Tarjeta(req.tarjeta.numero,req.tarjeta.vencimiento)
        direccionEnvio=,
        direccionFacturacion=faker.address.streetName(),
        monto=faker.impo;
        fechaTransaccion=fechaTransaccion;
        producto=producto;
    );
    newPeople.address = new address(
      faker.address.streetName(),
      faker.address.zipCode()
    );

    res.status(200).send(newPeople);
  });

  app.get("/people/:id", (req, res) => {
    const { id } = req.params;
    let newPeople = new people(
      faker.name.firstName(),
      faker.phone.phoneNumber()
    );
    res.status(200).send(newPeople);
  });

  app.post("/people", (req, res) => {
    let newPeople = new people(
      faker.name.firstName(),
      faker.phone.phoneNumber()
    );
    newPeople.address.push(
      new address(faker.address.streetName(), faker.address.zipCode())
    );
    res.status(200).send(JSON.stringify(newPeople));
  });

  app.post("/people/:id/address", (req, res) => {
    let newPeople = new people(
      faker.name.firstName(),
      faker.phone.phoneNumber()
    );
    newPeople.address = new address(
      faker.address.streetName(),
      faker.address.zipCode()
    );

    res.status(200).send(newPeople);
  });

  app.put("/people/:id", (req, res) => {
    const { id } = req.params;
    let updatedPeople = new people(
      faker.name.firstName(),
      faker.phone.phoneNumber()
    );
    res.status(200).send(updatedPeople);
  });

  app.delete("/people/:id", (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Borramos la persona ${id}`);
  });
};

module.exports = appRouter;
