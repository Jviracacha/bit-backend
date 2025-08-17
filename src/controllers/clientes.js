import clienteModel from "../models/cliente.js";

const clientesController = {
  create: async (request, response) => {
    
    try {
      //destructuring de los datos de la petición
      const { fullName, birthDate, correo, enrolled } = request.body;
      const newCliente = new clienteModel({
        fullName,
        birthDate,
        correo,
        enrolled,
      });
      // guardamos en la base de datos
      const clienteCreated = await newCliente.save();
      // código de respuesta para petición post + Json
      response.status(201).json({
        datosallOk: true,
        message: "client created successfully",
        data: clienteCreated,
      });

    } catch (error) {
      response.status(201).json({
        datosallOk: false,
        message: "error creating client",
        data: error.message,
      });
    }
  },
  readAll: async (request, response) => {
    try {
      response.send("get all works!!");
    } catch (error) {
      response.send("get all error!!");
    }
  },
  readOne: async (request, response) => {
    try {
      response.send("get one works!!");
    } catch (error) {
      response.send("get one error!!");
    }
  },
  update: async (request, response) => {
    try {
      response.send("put works!!");
    } catch (error) {
      response.send("put error!!");
    }
  },
  delete: async (request, response) => {
    try {
      response.send("delete works!!");
    } catch (error) {
      response.send("delete error!!");
    }
  },
};

export default clientesController;
