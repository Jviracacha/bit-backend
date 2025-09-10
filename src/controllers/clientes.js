import clienteModel from "../models/cliente.js";

const clientesController = {
  create: async (request, response) => {
    try {
      //destructuring de los datos de la petición
      const { fullName, birthDate, correo, enrolled } = request.body;
      //creo una nueva instancia del modelo de acuerdo al esquema que definimos
      const newCliente = new clienteModel({
        fullName,
        birthDate,
        correo,
        enrolled,
      });
      // guardamos en la base de datos
      const clienteCreated = await newCliente.save();
      // código de respuesta 201 para petición post + Json
        response.status(201).json({
        datosallOk: true,
        message: "Customer successfully created",
        data: clienteCreated,
      });
      // respuesta para el error con JSON
    } catch (error) {
        response.status(500).json({
        datosallOk: false,
        message: "Error creating client",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
    }
  },
  readAll: async (request, response) => {
    try {
        //hacemos que mongoose vaya a la BD y traiga todos los datos
        const clients = await clienteModel.find ()
        // código de respuesta 200 para petición post + Json
        response.status(200).json({
        datosallOk: true,
        message: "Successfully read customers",
        data: clients,
      });
    } catch (error) {
        response.status(500).json({
        datosallOk: false,
        message: "Error reading clients",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
      response.send("get all error!!");
    }
  },
  readOne: async (request, response) => {
    try {
        const {id} = request.params
        const client = await clienteModel.findById(id);
      if (!client) {
          response.status(404).json({
          datosallOk: false,
          message: "Error reading client",
          //para enviar el mensaje de error. usamos el objeto y su message
          data: null,
      });
        }
        response.status (200).json ({
          datosallOk: true,
          message: `Cliente con el ID ${id} encontrado correctamente`,
          data: client,
        });
    } catch (error) {
        response.status(500).json({
        datosallOk: false,
        message: "Error reading client",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
    
    }
  },
  update: async (request, response) => {
    try {
      const {id} = request.params
      const { fullName, birthDate, correo, enrolled } = request.body;
      const clientUpdated = await clienteModel.findByIdAndUpdate (id,{ fullName, birthDate, correo, enrolled, } );
      if (!clientUpdated) {
          response.status(404).json({
          datosallOk: false,
          message: `Client with id ${id} not found`,
          //para enviar el mensaje de error. usamos el objeto y su message
          data: null,
      });
        }
        response.status (200).json ({
          datosallOk: true,
          message: `Client with id ${id} updated successfully`,
          data: clientUpdated,
        });
    } catch (error) {
        response.status(500).json({
        datosallOk: false,
        message: "Error updating client",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
      response.send("put error!!");
    }
  },
  delete: async (request, response) => {
    try {
       const {id} = request.params
       const clientDeleted = await clienteModel.findByIdAndDelete (id)
      if (!clientDeleted) {
          response.status(404).json({
          datosallOk: false,
          message: `Client with id ${id} not found`,
          //para enviar el mensaje de error. usamos el objeto y su message
          data: null,
      });
        }
        response.status (200).json ({
          datosallOk: true,
          message: `Client with id ${id} deleted successfully`,
          data: clientDeleted,
        });
       
    } catch (error) {
         response.status(500).json({
         datosallOk: false,
         message: "Error deleting client",
         //para enviar el mensaje de error. usamos el objeto y su message
         data: error.message,
      });
      response.send("delete error!!");
    }
  },
};

export default clientesController;
