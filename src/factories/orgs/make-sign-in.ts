import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { SignInUseCase } from '@/use-cases/orgs/sign-in'

export function makeSignIn() {
  const orgRepository = new PrismaOrgRepository()
  const signIn = new SignInUseCase(orgRepository)

  return signIn
}
