import { FastifyInstance } from 'fastify'

import { validateToken } from '@/http/middlewares/validate-token'

import { create } from './create-controller'
import { fetchByCity } from './fetch-by-city-controller'
import { fetchPetsByCharacteristics } from './fetch-by-characteristics-controller'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    return reply.send({ message: 'ok' })
  })

  app.post('/', { onRequest: validateToken }, create)

  app.get('/fetch-by-city', fetchByCity)
  app.get('/fetch-by-characteristics', fetchPetsByCharacteristics)
}
