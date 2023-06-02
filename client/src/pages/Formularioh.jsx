import React from 'react'
import {Formik,Form} from 'formik'
import { useUsuario } from '../context/UsuarioProvider'
import { useParams } from 'react-router-dom'

const Formularioh = () => {
    const {crearHabitacion, obtenerHabitacion, actualizarHabitacion}=useUsuario()
    const {id}=useParams()
    const [habitacion,setHabitacion]=React.useState({
        numero:"",
        tipo:"",
        valor:""
    })
    React.useEffect(()=>{
        const cargarHabitacion=async()=>{
            if (id) {
                const room=await obtenerHabitacion(id)
                setHabitacion(room)
            }
        }
        cargarHabitacion()
    },[])

    return (
        <div>
            <h2 className='text-center text-black'>
                {
                    id ? 'Edición de Usuario': 'Registro de Usuario'
                }
            </h2>
            <Formik
            initialValues={habitacion}
            enableReinitialize={true}
            
            onSubmit={async(values,actions)=>{
                console.log(values);
                if (id) {
                    await actualizarHabitacion(id,values)
                }else{
                    await crearHabitacion(values)
                }
                setHabitacion({
                    numero:"",
                    tipo:"",
                    valor:""
                })
            }}
            >
                {
                    ({handleChange,handleSubmit,values,isSubmitting})=>(
                <Form onSubmit={handleSubmit}>
                    <label className='form-label mt-5'>Número de la habitación</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    placeholder='Ingrese el Número de la Habitacion' 
                    name='numero'
                    onChange={handleChange}
                    value={values.numero}
                    />
                    <label className='form-label'>Ingrese Tipo de habitación</label>
                    <select 
                    type="text" 
                    className="form-control" 
                    placeholder='Ingrese el Tipo de Habitación' 
                    name='tipo'
                    onChange={handleChange}>
                    value={values.tipo}
                    <option value="">Seleccionar Tipo de habitación</option>
                    <option value="individual">Habitacion individual</option>
                    <option value="doble">Habitacion doble</option>
                    <option value="cuadruple">Habitacion cuadruple</option>
                    </select>
                    <label className='form-label'>Valor de la Habitación</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    placeholder='Ingrese el Valor de la Habitación ' 
                    name='valor'
                    onChange={handleChange}
                    value={values.valor}
                    />
                    <div className='d-grid gap-2'>
                        <button type='submit' className='btn btn-outline-dark mt-3'
                        disabled={isSubmitting}>Guardar</button>
                    </div>
                </Form>
                    )
                }
            </Formik>
        </div>
    )
    }

export default Formularioh