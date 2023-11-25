import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFetchByCharacteristics } from '@/factories/pets/make-fetch-by-characteristics'

export async function fetchPetsByCharacteristics(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const queryParamsSchema = z.object({
    city: z.string(),
    size: z.union([z.enum(['Pequeno', 'Medio', 'Grande']), z.undefined()]),
    age: z.union([z.enum(['Filhote', 'Adulto', 'Idoso']), z.undefined()]),
    energy_level: z.union([z.number().min(1).max(4), z.undefined()]),
    level_of_Independence: z.union([z.string(), z.undefined()]),
    type: z.union([z.string(), z.undefined()]),
  })

  const { city, size, age, energy_level, level_of_Independence, type } =
    queryParamsSchema.parse(request.query)

  const fetchPetsByCharacteristics = makeFetchByCharacteristics()

  const { pets } = await fetchPetsByCharacteristics.execute({
    city,
    characteristics: {
      size,
      age,
      energy_level,
      level_of_Independence,
      type,
    },
  })

  return reply.status(200).send(pets)
}
