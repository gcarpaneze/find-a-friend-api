import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeSignIn } from '@/factories/orgs/make-sign-in'

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const { email, password } = bodySchema.parse(request.body)

  const signIn = makeSignIn()

  const { org } = await signIn.execute({
    email,
    password,
  })

  const token = await reply.jwtSign({ org: org.id })

  return reply.status(200).send({ token })
}
