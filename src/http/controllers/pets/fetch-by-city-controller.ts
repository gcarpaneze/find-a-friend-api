import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFetchByCity } from '@/factories/pets/make-fetch-by-city'

export async function fetchByCity(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const queryParamsSchema = z.object({
    city: z.string(),
  })

  const { city } = queryParamsSchema.parse(request.query)

  const fetchPetsByCity = makeFetchByCity()

  const { pets } = await fetchPetsByCity.execute({
    city,
  })

  return reply.status(200).send(pets)
}
