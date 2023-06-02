import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
return (
    <div className='navbar navbar-dark bg-dark'>
        <div className='d-flex'>
            <Link className="btn btn-dark" to={"/"}>Inicio</Link>
            <Link className="btn btn-dark" to={"habitaciones"}>Crear Habitacion</Link>
            <Link className="btn btn-dark" to={"reservas"}>Crear Reserva</Link>
        </div>
    </div>
)
}

export default Navbar