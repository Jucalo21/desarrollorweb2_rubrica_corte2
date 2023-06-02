import React from 'react'
import { useUsuario } from '../context/UsuarioProvider'
import { useNavigate } from 'react-router-dom'

const Cardhabitacion = ({item}) => {
    const {eliminarHabitacion}=useUsuario()
    const navigate=useNavigate()

return (
    <div className='card'>
        <div className='card-header'>Número de habitacion: {item.numero}</div>
        <div className="card-body">
            <div className="card-text">Tipo: {item.tipo}</div>
            <p className="card-text"> Valor: {item.valor}</p>
            <button 
            onClick={()=>eliminarHabitacion(item.codigo)}
            className="btn btn-danger float-end me-2">Eliminar</button>
            <button
            onClick={()=>navigate(`/editarh/${item.codigo}`)}
            className="btn btn-warning float-end me-2">Editar</button>
        </div>
    </div>
)
}

export default Cardhabitacion