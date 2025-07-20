import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "author 1",
      },
      {
        title: "Title 5",
        content: "Content 5",
        authorName: "author 5",
      },
      {
        title: "Title 6",
        content: "Content 6",
        authorName: "author 6",
      },
      {
        title: "Title 7",
        content: "Content 7",
        authorName: "author 7",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "author 3",
      },
      {
        title: "Title 5",
        content: "Content 5",
        authorName: "author 5",
      },
      {
        title: "Title 6",
        content: "Content 6",
        authorName: "author 6",
      },
      {
        title: "Title 4",
        content: "Content 4",
        authorName: "author 4",
      },
      {
        title: "Title 1",
        content: "Content 1",
        authorName: "author 1",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "author 2",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "author 3",
      },
      {
        title: "Title 2",
        content: "Content 2",
        authorName: "author 2",
      },
      {
        title: "Title 3",
        content: "Content 3",
        authorName: "author 3",
      },
    ],
  });
  console.log(createMany);
};

main();
