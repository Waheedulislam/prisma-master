import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 3,
  //     },
  //     data: {
  //       title: "This is title 3",
  //       content: "Content 3",
  //       authorName: "Author 3",
  //     },
  //   });

  const updateMany = await prisma.post.updateMany({
    where: {
      id: 4,
    },
    data: {
      title: "update title",
    },
  });

  console.log(updateMany);
};

updates();
