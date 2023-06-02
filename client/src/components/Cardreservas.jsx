import React from 'react'
import { useUsuario } from '../context/UsuarioProvider'
import { useNavigate } from 'react-router-dom'

const Cardreservas = ({item}) => {
    const {eliminarReserva}=useUsuario()
    const navigate=useNavigate()

return (
    <div className='card'>
        <div className='card-header'>Número de habitacion: {item.habitacion_codigo}</div>
        <div className="card-body">
            <div className="card-text">Telefono: {item.nombre_cliente}</div>
            <p className="card-text">Fecha Reservacion: {item.telefono_cliente} </p>
            <p className="card-text">Fecha Reservacion: {item.fecha_reservacion} </p>
            <p className="card-text">Fecha Entrada: {item.fecha_entrada}</p>
            <p className="card-text">Fecha Salida: {item.fecha_salida}</p>
            <button 
            onClick={()=>eliminarReserva(item.codigo)}
            className="btn btn-danger float-end me-2">Eliminar</button>
            <button 
            onClick={()=>navigate(`/editarr/${item.codigo}`)}
            className="btn btn-warning float-end me-2">Editar</button>
        </div>
    </div>
)
}

export default Cardreservas