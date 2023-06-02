import {  useContext, useState } from "react";
import { getHabitacionRequest,getReservaRequest,
    deleteHabitacionRequest,deleteReservaRequest,
    crearHabitacionRequest, crearReservaRequest,
    consultHabitacionRequest, consultReservaRequest,
    updateHabitacionesRequest, updateReservaRequest} from "../api/usuarios.api";
import { UsuarioContext } from "./Usuariocontext";

export const useUsuario=()=>{
    const contexto=useContext(UsuarioContext)
    if (!contexto) {
        throw new error('useUsuario debe ser usado dentro del provider')
    }
    return contexto
}

export const UsuarioContextProvider=({children})=>{
    const [habitaciones, setHabitaciones] = useState([])
    const [reservas, setReservas] = useState([])
    
    //leer habitaciones
    const obtenerHabitaciones=async()=>{
        try {
            const response=await getHabitacionRequest()
            console.log(response.data);
            setHabitaciones(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //leer reservas
    const obtenerReservas=async()=>{
        try {
            const response=await getReservaRequest()
            console.log(response.data);
            setReservas(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar habitacion
    const eliminarHabitacion=async(codigo)=>{
        try {
            const response=await deleteHabitacionRequest(codigo)
            /* console.log(response); */
            setHabitaciones(habitaciones.filter((habitacion=>habitacion.codigo!==codigo)))
        } catch (error) {
            console.log(error)
        }
    }

    //Eliminar reserva
    const eliminarReserva=async(codigo)=>{
        try {
            const response=await deleteReservaRequest(codigo)
            /* console.log(response); */
            setReservas(reservas.filter((reserva=>reserva.codigo!==codigo)))
        } catch (error) {
            console.log(error);
        }
    }

    //Crear Habitacion
    const crearHabitacion=async(values)=>{
        try {
            const response=await crearHabitacionRequest(values)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    //Crear Reserva
    const crearReserva=async(values)=>{
        try {
            const response=await crearReservaRequest(values)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    //Consultar Habitacion por ID
    const obtenerHabitacion=async(id)=>{
        try {
            const response=await consultHabitacionRequest(id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    //Consultar Reserva por ID
    const obtenerReserva=async(id)=>{
        try {
            const response=await consultReservaRequest(id)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    //Actualizar Habitacion por ID
    const actualizarHabitacion=async(id,nuevosValores)=>{
        try {
            const response=await updateHabitacionesRequest(id,nuevosValores)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    
    //Actualizar Reserva por ID
    const actualizarReserva=async(id,nuevosValores)=>{
        try {
            const response=await updateReservaRequest(id,nuevosValores)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UsuarioContext.Provider 
        value={{habitaciones,setHabitaciones,reservas,
        setReservas,obtenerHabitaciones,obtenerReservas,
        eliminarHabitacion,eliminarReserva,
        crearHabitacion,crearReserva,
        obtenerHabitacion,obtenerReserva,
        actualizarHabitacion,actualizarReserva}}>
            {children}
        </UsuarioContext.Provider>
    )
}