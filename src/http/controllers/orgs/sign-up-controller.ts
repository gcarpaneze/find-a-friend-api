import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeSignUp } from '@/factories/orgs/make-sign-up'

export async function signUp(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    telephone: z.string(),
    city: z.string(),
  })

  const { name, email, password, telephone, city } = bodySchema.parse(
    request.body,
  )

  const signUp = makeSignUp()

  await signUp.execute({
    name,
    email,
    password,
    telephone,
    city,
  })

  return reply.status(201).send()
}
