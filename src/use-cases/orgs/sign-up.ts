import type { Org } from '@prisma/client'
import type { OrgRepository } from '@/repositories/org-repository'

import { hash } from 'bcryptjs'

import { OrgAlreadyExistsError } from '../errors/org-already-exist-error'

interface SignUpUseCaseRequest {
  name: string
  email: string
  password: string
  telephone: string
  city: string
}

interface SignUpUseCaseReply {
  org: Org
}

export class SignUpUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    name,
    email,
    password,
    city,
    telephone,
  }: SignUpUseCaseRequest): Promise<SignUpUseCaseReply> {
    const emailIsAlreadyCreated = await this.orgRepository.findByEmail(email)

    if (emailIsAlreadyCreated) {
      throw new OrgAlreadyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const org = await this.orgRepository.create({
      name,
      email,
      password_hash: passwordHash,
      city,
      telephone,
    })

    return {
      org,
    }
  }
}
