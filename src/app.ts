import Fastify from 'fastify'
import { petsRoutes } from './http/controllers/pets/routes'
import { orgsRoutes } from './http/controllers/orgs/routes'

const app = Fastify()

export { app }

app.register(orgsRoutes, {
  prefix: '/orgs',
})
app.register(petsRoutes, {
  prefix: '/pets',
})
