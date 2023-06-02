import axios from 'axios'

export const getReservaRequest=async()=> 
await axios.get('http://localhost:3000/api/reservas')

export const crearReservaRequest=async(usuario)=> 
await axios.post('http://localhost:3000/api/reservas',usuario)

export const getHabitacionRequest=async()=> 
await axios.get('http://localhost:3000/api/habitaciones')

export const crearHabitacionRequest=async(usuario)=> 
await axios.post('http://localhost:3000/api/habitaciones',usuario)

export const deleteHabitacionRequest=async(id)=> 
await axios.delete(`http://localhost:3000/api/habitaciones/${id}`)

export const deleteReservaRequest=async(id)=> 
await axios.delete(`http://localhost:3000/api/reservas/${id}`)

export const consultHabitacionRequest=async(id)=> 
await axios.get(`http://localhost:3000/api/habitaciones/${id}`)

export const consultReservaRequest=async(id)=> 
await axios.get(`http://localhost:3000/api/reservas/${id}`)

export const updateReservaRequest=async(id,nuevosValores)=> 
await axios.patch(`http://localhost:3000/api/reservas/${id}`,nuevosValores)

export const updateHabitacionesRequest=async(id,nuevosValores)=> 
await axios.patch(`http://localhost:3000/api/habitaciones/${id}`,nuevosValores)
