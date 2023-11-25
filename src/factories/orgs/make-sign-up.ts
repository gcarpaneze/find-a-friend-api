import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { SignUpUseCase } from '@/use-cases/orgs/sign-up'

export function makeSignUp() {
  const orgRepository = new PrismaOrgRepository()
  const signUp = new SignUpUseCase(orgRepository)

  return signUp
}
