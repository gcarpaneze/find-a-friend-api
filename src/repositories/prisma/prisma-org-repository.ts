import type { Prisma } from '@prisma/client'
import type { OrgRepository } from './../org-repository'

import { prisma } from '@/libs/prisma'

export class PrismaOrgRepository implements OrgRepository {
  async findByEmail(email: string) {
    const org = await prisma.org.findUnique({
      where: {
        email,
      },
    })

    return org
  }

  async create(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }
}
