
import 'dotenv/config';
import connectDB from './config/db.js';
import express from 'express';
import morgan from 'morgan';
import clientesRouter from './routers/clientes.js';
import cors from "cors";
import registroRouter from './routers/registro.js';

const server = express()
const host = process.env.HOST;
const port = process.env.PORT;


connectDB ()
// se habilita cors para fronted vs API
server.use(cors({
  origin: "http://localhost:4200",  
  methods: ["GET", "POST", "PUT", "DELETE"],  // ajusta según tu API
  credentials: true
}));

server.use (express.json());
server.use(morgan("dev"));
server.use("/clientes", clientesRouter);
// para la 2da API
server.use("/registro", registroRouter);

server.get ("/", (request,response)=>{
    response.status (204).send();
});

server.listen (port,() => {
    console.log(`server is runing at ${host} on port ${port}`);
}); 