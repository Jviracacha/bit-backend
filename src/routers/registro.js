import { Router } from "express";
import registroController from "../controllers/registro.js";

const registroRouter = Router();

registroRouter.post ("/", registroController.create);
registroRouter.get ("/", registroController.readAll);


export default registroRouter;