import type { Org } from '@prisma/client'
import type { OrgRepository } from '@/repositories/org-repository'

import { compare } from 'bcryptjs'

import { InvalidCredentialsError } from '../errors/invalid-credentials-error'

interface SignInUseCaseRequest {
  email: string
  password: string
}

interface SignInUseCaseReply {
  org: Org
}

export class SignInUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    email,
    password,
  }: SignInUseCaseRequest): Promise<SignInUseCaseReply> {
    const org = await this.orgRepository.findByEmail(email)

    if (!org) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, org.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      org,
    }
  }
}
