
import 'dotenv/config';
import connectDB from './config/db.js';
import express from 'express';
import morgan from 'morgan';
import clientesRouter from './routers/clientes.js';

const server = express()
const host = process.env.HOST;
const port = process.env.PORT;

connectDB ()

server.use(morgan("dev"));
server.use("/clientes", clientesRouter);

server.get ("/", (request,response)=>{
    response.status (204).send();
});

server.listen (port,() => {
    console.log(`server is runing at ${host} on port ${port}`);
});