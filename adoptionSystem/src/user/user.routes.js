import express from "express";
import { validateJwt, isAdmin } from '../middlewares/validate-jws.js'
import { register, login, update, deleteU } from './user.controller.js';
import { test } from "../animal/animal.controller.js";


const api = express.Router();

// RUTAS PUBLICAS
api.post('/register', register)
api.post('/login', login)

                //Midlerware
//RUTAS PRIVADAS (Usuarios logeados)
api.put('/update/:id', [validateJwt], [isAdmin], update)  //Midleware -> funciones 
api.delete('/delete/:id', [validateJwt], [isAdmin], deleteU)
api.get('/test', [validateJwt], [isAdmin], test)

export default api