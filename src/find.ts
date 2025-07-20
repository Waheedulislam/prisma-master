import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // Find all
  const getAllFromDB = await prisma.post.findMany();

  // find first and find first or throw error
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  // find unique and find unique throw
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });
  console.log(findUnique);
};

main();
