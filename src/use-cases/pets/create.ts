import type { Pet } from '@prisma/client'
import type { PetRepository } from '@/repositories/pet-repository'

interface CreateUseCaseRequest {
  name: string
  type: string
  size: 'Pequeno' | 'Medio' | 'Grande'
  photo: string
  age: 'Filhote' | 'Adulto' | 'Idoso'
  description: string
  energy_level: number
  level_of_Independence: string
  org_id: string
}

interface CreateUseCaseReply {
  pet: Pet
}

export class CreateUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    name,
    type,
    size,
    photo,
    age,
    description,
    energy_level,
    level_of_Independence,
    org_id,
  }: CreateUseCaseRequest): Promise<CreateUseCaseReply> {
    const pet = await this.petRepository.create({
      name,
      type,
      size,
      photo,
      age,
      description,
      energy_level,
      level_of_Independence,
      org_id,
    })

    return {
      pet,
    }
  }
}
