import type { Pet } from '@prisma/client'
import type { PetRepository } from '@/repositories/pet-repository'

interface FetchPetsByCityUseCaseRequest {
  city: string
}

interface FetchPetsByCityUseCaseReply {
  pets: Pet[]
}

export class FetchPetsByCityUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    city,
  }: FetchPetsByCityUseCaseRequest): Promise<FetchPetsByCityUseCaseReply> {
    const pets = await this.petRepository.fetchByCity(city)

    return {
      pets,
    }
  }
}
