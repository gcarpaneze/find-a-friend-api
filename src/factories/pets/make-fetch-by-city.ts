import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FetchPetsByCityUseCase } from '@/use-cases/pets/fetch-pets-by-city'

export function makeFetchByCity() {
  const petRepository = new PrismaPetRepository()
  const fetchByCity = new FetchPetsByCityUseCase(petRepository)

  return fetchByCity
}
