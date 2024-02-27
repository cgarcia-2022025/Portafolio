'use strict'

import { Router } from 'express'
import { testAppointment, saveAppointment } from './appointment.controller.js'
import { validateJwt } from '../middlewares/validate-jws.js'

const api = Router()

api.get('/testAppointment', testAppointment)
api.post('/saveAppointment',[validateJwt], saveAppointment)

export default api