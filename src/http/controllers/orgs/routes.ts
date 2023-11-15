import { FastifyInstance } from 'fastify'

export async function orgsRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    return reply.send({ message: 'ok' })
  })
}
