const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Example data to seed
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    },
  });

  console.log('User created:', user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });