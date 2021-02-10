import { Router } from 'express'
import { v4 } from 'uuid'

const patientsRouter = Router()

interface Patient {
  id: string,
  name: string,
  email: string,
  password: string
}

const patients: Patient[] = []

patientsRouter.post('/', (request, response) => {
  const { name, email, password } = request.body

  const existentPatient = patients.find(patient => patient.email === email)

  if (existentPatient) {
    return response.status(400).json('This patient is already registered')
  }

  // Fazer tratamento do password;

  const patient = {
    id: v4(),
    name,
    email,
    password
  }

  // Armazenar no banco de dados, após isso deletar o password da resposta da requisição;

  delete patient.password

  patients.push(patient)

  return response.json(patient)
})

patientsRouter.get('/', (request, response) => {
  return response.json(patients)
})
export default patientsRouter
