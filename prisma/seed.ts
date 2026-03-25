import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();
const docsDir = path.join(process.cwd(), 'docs');

async function main() {
  const files = [
    { name: 'Simulado.json', type: 'v1' },
    { name: 'Simulado V2.json', type: 'v2' },
    { name: 'Simulado V3.json', type: 'v3' },
    { name: 'Simulado V4.json', type: 'v4' }
  ];

  for (const file of files) {
    const filePath = path.join(docsDir, file.name);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${file.name}`);
      continue;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    const count = await prisma.question.count({
      where: { simuladoType: file.type }
    });

    if (count === 0) {
      console.log(`Seeding ${data.length} questions for simuladoType: ${file.type}...`);
      await prisma.question.createMany({
        data: data.map((q: any) => ({
          content: q.content,
          options: q.options,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          simuladoType: q.simuladoType
        }))
      });
      console.log(`Successfully seeded ${file.type}`);
    } else {
      console.log(`Database already contains ${count} questions for type ${file.type}. Skipping seed.`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
