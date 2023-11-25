import type { Pet, Size, Age } from '@prisma/client'
import type { PetRepository } from '@/repositories/pet-repository'

interface FetchPetsByCharacteristicsUseCaseRequest {
  city: string
  characteristics: {
    type?: string
    age?: Age
    energy_level?: number
    level_of_Independence?: string
    size?: Size
  }
}

interface FetchPetsByCharacteristicsUseCaseReply {
  pets: Pet[]
}

export class FetchPetsByCharacteristicsUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    city,
    characteristics,
  }: FetchPetsByCharacteristicsUseCaseRequest): Promise<FetchPetsByCharacteristicsUseCaseReply> {
    const pets = await this.petRepository.fetchByCharacteristics({
      city,
      characteristics,
    })

    return {
      pets,
    }
  }
}
