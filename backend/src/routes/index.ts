import { Router } from 'express'
import patientsRouter from './patients.routes'

const routes = Router()

routes.use('/patients', patientsRouter)

export default routes
