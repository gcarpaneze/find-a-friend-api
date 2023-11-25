import type { Prisma, Org } from '@prisma/client'

export interface OrgRepository {
  findByEmail(email: string): Promise<Org | null>
  create(data: Prisma.OrgCreateInput): Promise<Org>
}
