import type { Prisma, Org } from '@prisma/client'
import type { OrgRepository } from './../org-repository'

import { randomUUID } from 'node:crypto'

export class InMemoryOrgRepository implements OrgRepository {
  public database: Org[] = []

  async findByEmail(email: string) {
    const org = this.database.find((item) => item.email === email)

    if (!org) {
      return null
    }

    return org
  }

  async create(data: Prisma.OrgCreateInput) {
    const org = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      telephone: data.telephone,
      city: data.city,
      created_at: new Date(),
    }

    this.database.push(org)

    return org
  }
}
