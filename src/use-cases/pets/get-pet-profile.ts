import type { Pet } from '@prisma/client'
import type { PetRepository } from '@/repositories/pet-repository'

interface GetPetProfileUseCaseRequest {
  id: string
}

interface GetPetProfileUseCaseReply {
  pet: Pet
}

export class GetPetProfileUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    id,
  }: GetPetProfileUseCaseRequest): Promise<GetPetProfileUseCaseReply> {
    const pet = await this.petRepository.getById(id)

    return {
      pet,
    }
  }
}
