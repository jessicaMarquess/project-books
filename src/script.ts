import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const book = await prisma.book.create({
    data: {
      name: 'Estrutura de dados e algoritmos com JavaScript',
      author: `Loaiane Groner`,
      status: `INDISPONIVEL`,
      edition: 3,
    },
  })
  console.log(book)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
