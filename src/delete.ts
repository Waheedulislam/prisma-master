import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const deleteData = async () => {
  const singleDelete = await prisma.post.deleteMany({
    where: {
      title: "Title 6",
    },
  });

  console.log(singleDelete);
};
deleteData();
