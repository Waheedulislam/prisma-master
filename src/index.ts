import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title 2",
  //       content: "This is content...",
  //       authorName: "Waheedul Islam",
  //     },
  //   });

  const getAllFromDB = await prisma.post.findMany();
  console.log(getAllFromDB);
};

main();
