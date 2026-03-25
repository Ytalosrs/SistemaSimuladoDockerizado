import { PrismaClient, SimuladoType } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const docsDir = path.join(process.cwd(), 'docs')

type RawQuestion = {
  content: string
  options: string[]
  correctAnswer: string
  explanation?: string
}

async function main() {
  const files: { name: string; type: SimuladoType }[] = [
    { name: 'Simulado.json', type: SimuladoType.v1 },
    { name: 'Simulado V2.json', type: SimuladoType.v2 },
    { name: 'Simulado V3.json', type: SimuladoType.v3 },
    { name: 'Simulado V4.json', type: SimuladoType.v4 },
  ]

  for (const file of files) {
    const filePath = path.join(docsDir, file.name)

    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${file.name}`)
      continue
    }

    const raw = fs.readFileSync(filePath, 'utf-8')
    const data: RawQuestion[] = JSON.parse(raw)

    const questions = data.slice(0, 60)
    if (questions.length !== 60) {
      console.warn(
        `WARN: ${file.name} tem ${questions.length} questões. Esperado: 60.`
      )
    }

    const count = await prisma.question.count({
      where: { simuladoType: file.type },
    })

    if (count === 0) {
      console.log(
        `Seeding ${questions.length} questions for simuladoType: ${file.type}...`
      )

      await prisma.question.createMany({
        data: questions.map((q) => ({
          content: q.content,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation ?? null,
          simuladoType: file.type,
        })),
      })

      console.log(`Successfully seeded ${file.type}`)
    } else {
      console.log(
        `Database already contains ${count} questions for type ${file.type}. Skipping seed.`
      )
    }
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
