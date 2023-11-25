import type { Prisma } from '@prisma/client'
import { PetRepository, Characteristics } from '../pet-repository'

import { prisma } from '@/libs/prisma'

export class PrismaPetRepository implements PetRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })

    return pet
  }

  async getById(id: string) {
    const pet = await prisma.pet.findFirst({
      where: {
        id,
      },
    })

    return pet
  }

  async fetchByCity(city: string) {
    const pets = await prisma.pet.findMany({
      include: {
        org: {
          select: {
            city: true,
          },
        },
      },
      where: {
        org: {
          city,
        },
      },
    })

    return pets
  }

  async fetchByCharacteristics({ city, characteristics }: Characteristics) {
    const { age, energy_level, level_of_Independence, size, type } =
      characteristics

    const pets = await prisma.pet.findMany({
      include: {
        org: {
          select: {
            city: true,
          },
        },
      },
      where: {
        AND: [
          {
            age: age || undefined,
            energy_level: energy_level || undefined,
            level_of_Independence: level_of_Independence || undefined,
            size: size || undefined,
            type: type || undefined,
          },
        ],
        org: {
          city,
        },
      },
    })

    return pets
  }
}
