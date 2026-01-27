import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from '../../generated/prisma/client';


const connectionString = `postgresql://postgres:123456789@localhost:5432/learn-prisma-app?schema=public`
console.log(connectionString)
const adapter = new PrismaPg({ connectionString })

const prisma = new PrismaClient({ adapter })

export { prisma }