import { InvalidTokenError } from '@/use-cases/errors/invalid-token-error'
import { FastifyRequest } from 'fastify'

export async function validateToken(request: FastifyRequest) {
  try {
    await request.jwtVerify()
  } catch (error) {
    throw new InvalidTokenError()
  }
}
