import {pool} from "../db.js"

export const getHabitaciones=async(req,res)=>{
    try {
        //Lanzar error
        //throw new Error('Error')
        const [rows]=await pool.query('SELECT * FROM habitaciones')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const getHabitacion=async(req,res)=>{
    try {
    const {codigo}=req.params
    const [rows]=await pool.query('SELECT * FROM habitaciones WHERE codigo=?',[codigo])
    if(rows.length<=0)return res.status(400).json({
    message:'Habitacion no encontrada'
    })
    res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const createHabitaciones=async(req,res)=>{
    try {
        console.log(req.body);
    const {codigo,numero,tipo,valor}=req.body
    const [rows]=await pool.query('INSERT INTO habitaciones(codigo,numero,tipo,valor) VALUES(?,?,?,?)',[codigo,numero,tipo,valor])
    console.log(rows);
    res.send({
        codigo: rows.insertId,
        numero,
        tipo,
        valor
    })
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const updateHabitaciones=async(req,res)=>{
    try {
        const {codigo}=req.params
        const {numero,tipo,valor}=req.body
        const [result]=await pool.query('UPDATE habitaciones SET numero=IFNULL(?,numero),tipo=IFNULL(?,tipo),valor=IFNULL(?,valor) WHERE codigo=?',[numero,tipo,valor,codigo])
        if (result.affectedRows<=0)return res.status(404),json({
            message:'habitacion no encontrada'
        })
        const [rows]=await pool.query('SELECT * FROM habitaciones WHERE codigo=?',[codigo])
        
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const deleteHabitaciones=async(req,res)=>{
    try {
        const {codigo}=req.params
    const [result]=await pool.query('DELETE FROM habitaciones WHERE codigo=?',[codigo])
    if(result.affectedRows<=0)return res.status(404).json({
        message:'Habitacion no encontrada'
    })
    console.log(result);
    res.send(204)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error',
            message: error
        })
    }

}

export const getReservas=async(req,res)=>{
    try {
        //Lanzar error
        //throw new Error('Error')
        const [rows]=await pool.query('SELECT * FROM reservas')
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const getReserva=async(req,res)=>{
    try {
    const {codigo}=req.params
    const [rows]=await pool.query('SELECT * FROM reservas WHERE codigo=?',[codigo])
    if(rows.length<=0)return res.status(400).json({
    message:'reserva no encontrada'
    })
    res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}

export const createReservas=async(req,res)=>{
    try {
        console.log(req.body);
    const {codigo,habitacion_codigo,nombre_cliente,telefono_cliente,fecha_reservacion,fecha_entrada,fecha_salida}=req.body
    const [rows]=await pool.query('INSERT INTO reservas(codigo,habitacion_codigo,nombre_cliente,telefono_cliente,fecha_reservacion,fecha_entrada,fecha_salida) VALUES(?,?,?,?,?,?,?)',[codigo,habitacion_codigo,nombre_cliente,telefono_cliente,fecha_reservacion,fecha_entrada,fecha_salida])
    console.log(rows);
    res.send({
        codigo: rows.insertId,
        habitacion_codigo,
        nombre_cliente,
        telefono_cliente,
        fecha_reservacion,
        fecha_entrada,
        fecha_salida
    })
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error',
            message:error
        })
    }
}
export const updateReservas=async(req,res)=>{
    try {
        const {codigo}=req.params
        const {habitacion_codigo,nombre_cliente,telefono_cliente,fecha_reservacion,fecha_entrada,fecha_salida}=req.body
        const [result]=await pool.query('UPDATE reservas SET habitacion_codigo=IFNULL(?,habitacion_codigo),nombre_cliente=IFNULL(?,nombre_cliente),telefono_cliente=IFNULL(?,telefono_cliente),fecha_reservacion=IFNULL(?,fecha_reservacion),fecha_entrada=IFNULL(?,fecha_entrada),fecha_salida=IFNULL(?,fecha_salida) WHERE codigo=?',[habitacion_codigo,nombre_cliente,telefono_cliente,fecha_reservacion,fecha_entrada,fecha_salida,codigo])
        if (result.affectedRows<=0)return res.status(404),json({
            message:'Usuario no encontrado'
        })
        const [rows]=await pool.query('SELECT * FROM reservas WHERE codigo=?',[codigo])
        
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }
}
export const deleteReservas=async(req,res)=>{
    try {
        const {codigo}=req.params
    const [result]=await pool.query('DELETE FROM reservas WHERE codigo=?',[codigo])
    if(result.affectedRows<=0)return res.status(404).json({
        message:'Reserva no encontrada'
    })
    console.log(result);
    res.send(204)
    } catch (error) {
        return res.status(500).json({
            message:'Ha ocurrido un error'
        })
    }

}