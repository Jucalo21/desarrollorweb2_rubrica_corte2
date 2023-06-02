import { Router } from "express";
import { getHabitaciones,getHabitacion,createReservas,updateReservas,deleteReservas, getReservas, getReserva, createHabitaciones, updateHabitaciones, deleteHabitaciones } from "../controllers/habitaciones.controller.js";

const router=Router()
router.get('/habitaciones', getHabitaciones)
router.get('/habitaciones/:codigo', getHabitacion)
router.post('/habitaciones', createHabitaciones)
router.patch('/habitaciones/:codigo', updateHabitaciones)
router.delete('/habitaciones/:codigo', deleteHabitaciones)
router.post('/reservas', createReservas)
router.get('/reservas', getReservas)
router.get('/reservas/:codigo', getReserva)
router.patch('/reservas/:codigo', updateReservas)
router.delete('/reservas/:codigo', deleteReservas)

export default router