import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreate } from '@/factories/pets/make-create'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    type: z.string(),
    size: z.enum(['Pequeno', 'Medio', 'Grande']),
    photo: z.string(),
    age: z.enum(['Filhote', 'Adulto', 'Idoso']),
    description: z.string(),
    energy_level: z.number().min(1).max(4),
    level_of_Independence: z.string(),
    org_id: z.string().uuid(),
  })

  const {
    name,
    type,
    size,
    photo,
    age,
    description,
    energy_level,
    level_of_Independence,
    org_id,
  } = bodySchema.parse(request.body)

  const create = makeCreate()

  await create.execute({
    name,
    type,
    size,
    photo,
    age,
    description,
    energy_level,
    level_of_Independence,
    org_id,
  })

  return reply.status(201).send()
}
