import Fastify from 'fastify'
import { fastifyJwt } from '@fastify/jwt'

import { env } from './env'

import { petsRoutes } from './http/controllers/pets/routes'
import { orgsRoutes } from './http/controllers/orgs/routes'

const app = Fastify()

export { app }

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(orgsRoutes, {
  prefix: '/orgs',
})
app.register(petsRoutes, {
  prefix: '/pets',
})
