import type { Prisma, Pet } from '@prisma/client'
import type { PetRepository } from '../pet-repository'

import { randomUUID } from 'node:crypto'

interface Characteristics {
  city: string
  characteristics: {
    type: string
    value: string
  }[]
}

export class InMemoryPetRepository implements PetRepository {
  public database: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      name: data.name,
      photo: data.photo,
      description: data.description,
      type: data.type,
      age: data.age,
      energy_level: data.energy_level,
      level_of_Independence: data.level_of_Independence,
      size: data.size ?? 'Medio',
      created_at: new Date(),
      adopted_at: null,
      org_id: data.org_id,
    }
    this.database.push(pet)

    return pet
  }

  async getById(id: string) {
    const pet = this.database.find((item) => item.id === id)

    if (!pet) {
      return null
    }

    return pet
  }

  fetchByCity(city: string) {
    const pets = this.database.filter((item) => item.org_id)
  }

  fetchByCharacteristics({ city, characteristics }: Characteristics): Promise<
    {
      id: string
      name: string
      photo: string
      description: string
      type: string
      age: $Enums.Age
      energy_level: number
      level_of_Independence: string
      size: $Enums.Size
      created_at: Date
      adopted_at: Date | null
      org_id: string
    }[]
  > {
    throw new Error('Method not implemented.')
  }
}
