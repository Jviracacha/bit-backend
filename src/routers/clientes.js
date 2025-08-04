import { Router } from "express";
import clientesController from "../controllers/clientes.js";

const clientesRouter = Router();

clientesRouter.post ("/", clientesController.create);
clientesRouter.get ("/", clientesController.readAll);
clientesRouter.get ("/:id", clientesController.readOne);
clientesRouter.put ("/:id", clientesController.update);
clientesRouter.delete ("/:id", clientesController.delete);

export default clientesRouter;