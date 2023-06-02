import React from 'react'
import { getReservaRequest,getHabitacionRequest } from '../api/usuarios.api'
import { useEffect } from 'react'
import Cardhabitacion from '../components/Cardhabitacion'
import Cardreservas from '../components/Cardreservas'
import { useUsuario } from '../context/UsuarioProvider'

const Usuarios = () => {
    const{habitaciones,setHabitaciones,reservas,setReservas,obtenerHabitaciones,obtenerReservas}=useUsuario()
    
    useEffect(()=>{
        obtenerHabitaciones()
        obtenerReservas()
    },[]
)
return (
    <div>
        <h1 className='text-center text-primary-dark mt-4'>Habitaciones Registradas
        <ul className="list-group mt-4">
            {
                habitaciones.map(item=>(
                    <Cardhabitacion item={item} key={item.codigo}/>
                ))
            }
        </ul>
        </h1>
        <h1 className='text-center text-primary-dark mt-5'>Reservas Hechas
        <ul className="list-group">
            {
                reservas.map(item=>(
                    <Cardreservas item={item} key={item.codigo}/>
                ))
            }
        </ul>
        </h1>
    </div>
    )
}

export default Usuarios