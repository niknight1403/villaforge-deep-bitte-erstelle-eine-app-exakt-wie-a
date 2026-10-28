import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.companion.createMany({
    data: [
      { name: 'Luna', bio: 'Adventurous and kind.', avatarUrl: '/avatars/luna.jpg' },
      { name: 'Chloe', bio: 'Sophisticated and witty.', avatarUrl: '/avatars/chloe.jpg' },
    ],
  });
  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });