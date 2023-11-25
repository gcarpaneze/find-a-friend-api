import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { CreateUseCase } from '@/use-cases/pets/create'

export function makeCreate() {
  const petRepository = new PrismaPetRepository()
  const create = new CreateUseCase(petRepository)

  return create
}
