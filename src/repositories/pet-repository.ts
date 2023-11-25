import type { Prisma, Pet, Age, Size } from '@prisma/client'

export interface Characteristics {
  city: string
  characteristics: {
    type?: string
    age?: Age
    energy_level?: number
    level_of_Independence?: string
    size?: Size
  }
}

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  getById(id: string): Promise<Pet | null>
  fetchByCity(city: string): Promise<Pet[] | null>
  fetchByCharacteristics({
    city,
    characteristics,
  }: Characteristics): Promise<Pet[]>
}
