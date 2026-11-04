import prisma from "@prisma/client";

const seed = async () => {
  const prismaClient = new prisma.PrismaClient();

  try {
    // Example data seeding
    await prismaClient.user.create({
      data: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    });

    console.log("Data seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prismaClient.$disconnect();
  }
};

seed();