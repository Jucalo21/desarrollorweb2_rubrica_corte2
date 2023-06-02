import React from 'react'
import {Formik,Form} from 'formik'
import { useUsuario } from '../context/UsuarioProvider'
import { useParams } from 'react-router-dom'


const Formulario = () => {
    const {crearReserva, obtenerReserva,actualizarReserva}=useUsuario()
    const {id}=useParams()
    const [reserva,setReserva]=React.useState({
        habitacion_codigo:"",
        nombre_cliente:"",
        telefono_cliente:"",
        fecha_reservacion:"",
        fecha_entrada:"",
        fecha_salida:""
    })
    React.useEffect(()=>{
        const cargarReserva=async()=>{
            if (id) {
                const booking=await obtenerReserva(id)
                setReserva(booking)
            }
        }
        cargarReserva()
    },[])

return (
    <div>
        <h2 className='text-center text-black'>
        {
                    id ? 'Edición de Usuario': 'Registro de Usuario'
                }
        </h2>
        <Formik
        initialValues={reserva}
        enableReinitialize={true}

        onSubmit={async(values,actions)=>{
            console.log(values);
            if (id) {
                await actualizarReserva(id,values)
            } else {
                await crearReserva(values)
            }
            setReserva({
        habitacion_codigo:"",
        nombre_cliente:"",
        telefono_cliente:"",
        fecha_reservacion:"",
        fecha_entrada:"",
        fecha_salida:""
            })
        }}
        >
            {
                ({handleChange,handleSubmit,values,isSubmitting})=>(
            <Form onSubmit={handleSubmit}>
                <label className='form-label mt-5'>Codigo de la habitacion</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Ingrese el Codigo de la Habitacion' 
                name='habitacion_codigo'
                onChange={handleChange}
                value={values.habitacion_codigo}
                />
                <label className='form-label'>Nombre</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='Ingrese el Nombre' 
                name='nombre_cliente'
                onChange={handleChange}
                value={values.nombre_cliente} 
                />
                <label className='form-label'>Telefono</label>
                <input 
                type="number" 
                className="form-control" 
                placeholder='Ingrese su Número de Telefono' 
                name='telefono_cliente'
                onChange={handleChange}
                value={values.telefono_cliente}
                />
                <label className='form-label'>Fecha de la reservacion</label>
                <input 
                type="date" 
                className="form-control" 
                placeholder='Ingrese la Fecha de Reservación' 
                name='fecha_reservacion'
                onChange={handleChange}
                value={values.fecha_reservacion}
                />
                <label className='form-label'>Fecha de entrada</label>
                <input 
                type="date" 
                className="form-control" 
                placeholder='Ingrese la Fecha de Entrada' 
                name='fecha_entrada'
                onChange={handleChange}
                value={values.fecha_entrada}
                />
                <label className='form-label'>Fecha de salida</label>
                <input 
                type="date" 
                className="form-control" 
                placeholder='Ingrese la Fecha de Salida' 
                name='fecha_salida'
                onChange={handleChange}
                value={values.fecha_salida}
                />
                <div className='d-grid gap-2'
                disabled={isSubmitting}>
                    <button type='submit' className='btn btn-outline-dark mt-3'>Guardar</button>
                </div>
            </Form>
                )
            }
        </Formik>
    </div>
)
}

export default Formulario