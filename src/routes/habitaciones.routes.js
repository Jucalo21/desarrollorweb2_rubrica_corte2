import { Router } from "express";
import { getHabitaciones,getHabitacion,createReservas,updateReservas,deleteReservas } from "../controllers/habitaciones.controller.js";

const router=Router()
router.get('/habitaciones', getHabitaciones)
router.get('/habitaciones/:codigo', getHabitacion)
router.post('/reservas', createReservas)
router.patch('/reservas/:codigo', updateReservas)
router.delete('/reservas/:codigo', deleteReservas)

export default router