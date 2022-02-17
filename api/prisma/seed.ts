import { PrismaClient } from '@prisma/client';
import { LoremIpsum } from 'lorem-ipsum';

const prisma = new PrismaClient();

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 2,
  },
});

async function main() {
  await prisma.game.createMany({
    data: [
      { name: 'Arctico' },
      { name: 'PowerSlave Exhumed' },
      { name: 'OlliOlli World' },
      { name: 'Rogue Tower' },
      { name: 'Wanderer' },
    ],
  });

  await prisma.session.createMany({
    data: [
      { gameId: 1 },
      { gameId: 1 },
      { gameId: 2 },
      { gameId: 2 },
      { gameId: 3 },
      { gameId: 3 },
      { gameId: 4 },
      { gameId: 4 },
      { gameId: 5 },
      { gameId: 5 },
    ],
  });

  await prisma.user.createMany({
    data: [
      {
        email: 'alice@unity3d.com',
        name: 'Alice',
      },
      {
        email: 'bob@unity3d.com',
        name: 'Bob',
      },
      {
        email: 'john@unity3d.com',
        name: 'John',
      },
      {
        email: 'george@unity3d.com',
        name: 'George',
      },
      {
        email: 'lian@unity3d.com',
        name: 'Lian',
      },
      {
        email: 'amanda@unity3d.com',
        name: 'Amanda',
      },
    ],
  });

  await prisma.user.update({
    where: {
      email: 'alice@unity3d.com',
    },
    data: {
      feedback: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 5,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-16'),
            },
            {
              sessionId: 3,
              rating: 4,
              content: lorem.generateSentences(2),
              timeCreated: new Date('2022-02-15'),
            },
            {
              sessionId: 5,
              rating: 3,
              content: lorem.generateSentences(1),
              timeCreated: new Date('2022-02-14'),
            },
            {
              sessionId: 7,
              rating: 2,
              content: lorem.generateSentences(4),
              timeCreated: new Date('2022-02-13'),
            },
            {
              sessionId: 9,
              rating: 1,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-12'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'bob@unity3d.com',
    },
    data: {
      feedback: {
        createMany: {
          data: [
            {
              sessionId: 2,
              rating: 5,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-06'),
            },
            {
              sessionId: 4,
              rating: 4,
              content: lorem.generateSentences(2),
              timeCreated: new Date('2022-02-07'),
            },
            {
              sessionId: 6,
              rating: 3,
              content: lorem.generateSentences(1),
              timeCreated: new Date('2022-02-08'),
            },
            {
              sessionId: 8,
              rating: 2,
              content: lorem.generateSentences(4),
              timeCreated: new Date('2022-02-09'),
            },
            {
              sessionId: 10,
              rating: 1,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-10'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'john@unity3d.com',
    },
    data: {
      feedback: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 1,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-16'),
            },
            {
              sessionId: 3,
              rating: 2,
              content: lorem.generateSentences(2),
              timeCreated: new Date('2022-02-15'),
            },
            {
              sessionId: 5,
              rating: 3,
              content: lorem.generateSentences(1),
              timeCreated: new Date('2022-02-14'),
            },
            {
              sessionId: 7,
              rating: 4,
              content: lorem.generateSentences(4),
              timeCreated: new Date('2022-02-13'),
            },
            {
              sessionId: 9,
              rating: 5,
              content: lorem.generateSentences(5),
              timeCreated: new Date('2022-02-12'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'george@unity3d.com',
    },
    data: {
      feedback: {
        createMany: {
          data: [
            {
              sessionId: 2,
              rating: 5,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-16'),
            },
            {
              sessionId: 4,
              rating: 4,
              content: lorem.generateSentences(2),
              timeCreated: new Date('2022-02-15'),
            },
            {
              sessionId: 6,
              rating: 3,
              content: lorem.generateSentences(1),
              timeCreated: new Date('2022-02-14'),
            },
            {
              sessionId: 8,
              rating: 2,
              content: lorem.generateSentences(4),
              timeCreated: new Date('2022-02-13'),
            },
            {
              sessionId: 10,
              rating: 1,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-12'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'lian@unity3d.com',
    },
    data: {
      feedback: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 5,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-06'),
            },
            {
              sessionId: 2,
              rating: 4,
              content: lorem.generateSentences(2),
              timeCreated: new Date('2022-02-15'),
            },
            {
              sessionId: 3,
              rating: 5,
              content: lorem.generateSentences(1),
              timeCreated: new Date('2022-02-04'),
            },
            {
              sessionId: 4,
              rating: 5,
              content: lorem.generateSentences(4),
              timeCreated: new Date('2022-02-13'),
            },
            {
              sessionId: 5,
              rating: 4,
              content: lorem.generateSentences(3),
              timeCreated: new Date('2022-02-02'),
            },
          ],
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
