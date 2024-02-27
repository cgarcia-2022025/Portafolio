'use strict'

import { checkUpdate } from '../../utils/validator.js'
import Animal from './animal.model.js'

export const test = (req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is runnign'})
}

export const registerAnimal = async(req, res)=>{
    try{
        let data = req.body
        console.log(data)
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: `The pet ${data.namePet} has been registered`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message:'Error, cannot register the animal'})
    }
}


export const updateAnimal = async(req, res)=>{
    try{
        let{id} = req.params
        let data = req.body
        let updateAnimal = await Animal.findOneUpdate(
            {_id: id},
            data,
            {new: true}
        )
        if(!updateAnimal) return res.status(400).send({message:'have subitted some data that cannot be updated or missing data'})
        return res.send({message: 'The animal has been updated'})
    }catch(err){
        console.error(err)
        return res.status(500).send({menssage:'Error upadating animal'})
    }
}

export const deletedAnimal = async(req, res)=>{
    try{
        // Obtener el Id
        let { id } = req.params
        // Validar si esta logueado y es el mismo X No lo vemos hoy X
        // Eliminar (deleteOne / findOneAndDelete)
        let deletedAnimal = await Animal.findOneAndDelete({_id: id})
        // Verificar que se elimino
        if(!deletedAnimal) return res.status(404).send({message: 'Account not found and not deleted'})
        // Responder
        return res.send({message: `the animal deleted succesfully`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error deleting pet'})
    }
}


export const get = async(req, res)=>{
try{
    let animal = await Animal.find()
    if(!animal) return res.status(404).send({message: 'Animals not found'})
    return res.send({animal})
}catch(err){
    console.error(err)
    return res.status(500).send({menssage:'Error upadating animal'})
}
}

export const search = async(req, res)=>{
    try{
        //Obtener el parámetro de búsqueda
        let { search } = req.body
        //Buscar
        let animals = await Animal.find(
            {name: search}
        ).populate('keeper', ['name', 'phone'])
        //Validar la respuesta
        if(!animals) return res.status(404).send({message: 'Animals not found'})
        //Responder si todo sale bien
        return res.send({message: 'Animals found', animals})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error searching animals'})
    }
}