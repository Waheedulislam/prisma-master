import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  // offset pagination

  //   const offsetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });

  //   console.log(offsetData);

  // cursor based pagination
  //   const cursorData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //     cursor: {
  //       id: 4,
  //     },
  //   });

  //   console.log(cursorData);

  // sorting
  const sortingData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
    where: {
      title: "Title 1",
    },
  });

  console.log(sortingData);
};

paginationSorting();
