import { FastifyInstance } from 'fastify'

export async function petsRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    return reply.send({ message: 'ok' })
  })
}
