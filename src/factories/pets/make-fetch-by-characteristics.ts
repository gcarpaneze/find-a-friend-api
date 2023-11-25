import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FetchPetsByCharacteristicsUseCase } from '@/use-cases/pets/fetch-pets-by-characteristics'

export function makeFetchByCharacteristics() {
  const petRepository = new PrismaPetRepository()
  const fetchByCharacteristics = new FetchPetsByCharacteristicsUseCase(
    petRepository,
  )

  return fetchByCharacteristics
}
