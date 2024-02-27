import express from "express";
import { registerAnimal, test, updateAnimal, deletedAnimal, get } from './animal.controller.js';

const api = express.Router();

api.get('/test', test)
api.post('/registerAnimal', registerAnimal)
api.put('./update/:id', updateAnimal)
api.delete('/deletedAnimal/:id', deletedAnimal)
api.get('./get', get)

export default api