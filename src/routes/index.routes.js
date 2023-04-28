import { Router } from "express";
import { prueba } from "../controllers/index.controllers.js";

const router=Router()
//Prueba de la base de datos
router.get('/prueba',prueba)

export default router