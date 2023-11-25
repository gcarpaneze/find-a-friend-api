import { FastifyInstance } from 'fastify'

import { signUp } from './sign-up-controller'
import { signIn } from './sign-in-controller'

export async function orgsRoutes(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    return reply.send({ message: 'ok' })
  })

  app.post('/', signUp)

  app.post('/session', signIn)
}
