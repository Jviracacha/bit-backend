import registroModel from "../models/registro.js";

const registroController = {
  create: async (request, response) => {
    try {
      //console.log(request.body);
      
      //destructuring de los datos de la petición
      const { name, email, clave, foto } = request.body;
      //creo una nueva instancia del modelo de acuerdo al esquema 
      const newregistro = new registroModel({
        name,
        email,
        clave,
        foto,
      });
      // guardamos en la base de datos para nuestra API nueva llamada registro
      const registroCreated = await newregistro.save();
      // código de respuesta 201 para petición post + Json
      response.status(201).json({
        datosallOk: true,
        message: "user successfully created",
        data: registroCreated,
      });
      // respuesta para el error con JSON
    } catch (error) {
      response.status(500).json({
        datosallOk: false,
        message: "error creating record",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
    }
  },
  readAll: async (request, response) => {
    try {
      //hacemos que mongoose vaya a la BD y traiga todos los datos
      const registro = await registroModel.find();
      // código de respuesta 200 para petición post + Json
      response.status(200).json({
        datosallOk: true,
        message: "Records read Successfully",
        data: registro,
      });
    } catch (error) {
      response.status(500).json({
        datosallOk: false,
        message: "Error reading records",
        //para enviar el mensaje de error. usamos el objeto y su message
        data: error.message,
      });
      response.send("get all error!!");
    }
  },
};

export default registroController;
