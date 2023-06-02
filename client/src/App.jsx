import './App.css'
import {Routes, Route} from 'react-router-dom'
import Usuarios from './pages/Usuarios'
import Formulario from './pages/Formulario'
import Formularioh from './pages/Formularioh'
import Notfound from './pages/Notfound'
import Navbar from './components/Navbar'
import { UsuarioContextProvider } from './context/UsuarioProvider'

function App() {

  return (
    <UsuarioContextProvider>
    <div className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Usuarios/>}/>
        <Route path='/reservas' element={<Formulario/>}/>
        <Route path='/habitaciones' element={<Formularioh/>}/>
        <Route path='/editarr/:id' element={<Formulario/>}/> 
        <Route path='/editarh/:id' element={<Formularioh/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </UsuarioContextProvider>
  )
}

export default App
