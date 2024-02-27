'use strict'

import Appointment from './appointment.model.js'
import Animal from '../animal/animal.model.js'

export const testAppointment = (req, res)=>{
    return res.send({message: 'Function test is running'})
}

export const saveAppointment = async(req, res)=>{
    try {
        //Capturar data
        let data =  req.body    
        data.user =  req.user._id//jalar el id del usuario logeado
        //Verificar que exista el animal
        let animal = await Animal.findOne({_id: data.animal})
        if(!animal) return res.status(404).send({message: 'Animal not found'})
        //Validar que la mascota no tenga una cita activa con es persona
        let existAppointment = await Appointment.findOne({
            $or:[
                {animal: data.animal,
                user: data.user
                },
                {
                date : data.date,
                user: data.user}
            ]
        })
        if (existAppointment) return res.send({message: 'Appointment alredy exist'})
        //EJERCICIO: Que el usuario solo pueda tener una cita por dia
        //Guardar
        let appointment = new Appointment(data)
        await appointment.save()
        return res.send({message:  `Error saved succefully for the date ${appointment.data}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error creating appointment', err})
    }
}