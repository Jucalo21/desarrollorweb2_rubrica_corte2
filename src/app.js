import express from "express"
import habitacionesRoutes from './routes/habitaciones.routes.js'
import indexRoutes from './routes/index.routes.js'
import './config.js'
import {PORT} from './config.js'
import cors from 'cors'

const app=express()

app.use(cors())
app.use(express.json())
app.use('/api',habitacionesRoutes)
app.use(indexRoutes)
app.use((req,res)=>{
    res.status(404).json({
        message:'Ruta no encontrada'
    })
})

export default app;