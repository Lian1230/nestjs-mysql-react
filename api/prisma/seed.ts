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
  const isGameSeeded = await prisma.game.findFirst();

  if (!isGameSeeded) {
    await prisma.game.createMany({
      data: [
        { name: 'Arctico' },
        { name: 'PowerSlave Exhumed' },
        { name: 'OlliOlli World' },
        { name: 'Rogue Tower' },
        { name: 'Wanderer' },
      ],
    });
  }

  const isSessionSeeded = await prisma.session.findFirst();
  if (!isSessionSeeded) {
    await prisma.session.createMany({
      data: [
        { gameId: 1, duration: 15, startedAt: new Date('2022-02-10T03:24:00') },
        { gameId: 1, duration: 20, startedAt: new Date('2022-02-11T03:14:00') },
        { gameId: 2, duration: 25, startedAt: new Date('2022-02-12T08:23:00') },
        { gameId: 2, duration: 30, startedAt: new Date('2022-02-13T10:04:00') },
        { gameId: 3, duration: 35, startedAt: new Date('2022-02-14T09:25:00') },
        { gameId: 3, duration: 36, startedAt: new Date('2022-02-15T04:29:00') },
        { gameId: 4, duration: 40, startedAt: new Date('2022-02-16T08:24:00') },
        { gameId: 4, duration: 48, startedAt: new Date('2022-02-17T07:22:00') },
        { gameId: 5, duration: 50, startedAt: new Date('2022-02-03T06:19:00') },
        { gameId: 5, duration: 60, startedAt: new Date('2022-02-05T05:24:00') },
      ],
    });
  }

  const isUserSeeded = await prisma.user.findFirst();
  if (!isUserSeeded) {
    await prisma.user.createMany({
      data: [
        {
          email: 'lian@unity3d.com',
          name: 'Lian',
        },
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
          email: 'amanda@unity3d.com',
          name: 'Amanda',
        },
      ],
    });
  }

  await prisma.user.update({
    where: {
      email: 'lian@unity3d.com',
    },
    data: {
      sessionsOnUsers: {
        createMany: {
          data: [
            { sessionId: 1 },
            { sessionId: 2 },
            { sessionId: 3 },
            { sessionId: 4 },
            { sessionId: 5 },
            { sessionId: 6 },
            { sessionId: 7 },
            { sessionId: 8 },
            { sessionId: 9 },
            { sessionId: 10 },
          ],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 5,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-06'),
            },
            {
              sessionId: 2,
              rating: 4,
              content: lorem.generateSentences(2),
              createdAt: new Date('2022-02-15'),
            },
            {
              sessionId: 3,
              rating: 5,
              content: lorem.generateSentences(1),
              createdAt: new Date('2022-02-04'),
            },
            {
              sessionId: 4,
              rating: 5,
              content: lorem.generateSentences(4),
              createdAt: new Date('2022-02-13'),
            },
            {
              sessionId: 5,
              rating: 4,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-02'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'alice@unity3d.com',
    },
    data: {
      sessionsOnUsers: {
        createMany: {
          data: [
            { sessionId: 1 },
            { sessionId: 3 },
            { sessionId: 5 },
            { sessionId: 7 },
            { sessionId: 9 },
            { sessionId: 10 },
          ],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 5,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-16'),
            },
            {
              sessionId: 3,
              rating: 4,
              content: lorem.generateSentences(2),
              createdAt: new Date('2022-02-15'),
            },
            {
              sessionId: 5,
              rating: 3,
              content: lorem.generateSentences(1),
              createdAt: new Date('2022-02-14'),
            },
            {
              sessionId: 7,
              rating: 2,
              content: lorem.generateSentences(4),
              createdAt: new Date('2022-02-13'),
            },
            {
              sessionId: 9,
              rating: 1,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-12'),
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
      sessionsOnUsers: {
        createMany: {
          data: [
            { sessionId: 2 },
            { sessionId: 4 },
            { sessionId: 6 },
            { sessionId: 7 },
            { sessionId: 8 },
            { sessionId: 10 },
          ],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 2,
              rating: 5,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-06'),
            },
            {
              sessionId: 4,
              rating: 4,
              content: lorem.generateSentences(2),
              createdAt: new Date('2022-02-07'),
            },
            {
              sessionId: 6,
              rating: 3,
              content: lorem.generateSentences(1),
              createdAt: new Date('2022-02-08'),
            },
            {
              sessionId: 8,
              rating: 2,
              content: lorem.generateSentences(4),
              createdAt: new Date('2022-02-09'),
            },
            {
              sessionId: 10,
              rating: 1,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-10'),
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
      sessionsOnUsers: {
        createMany: {
          data: [
            { sessionId: 1 },
            { sessionId: 3 },
            { sessionId: 5 },
            { sessionId: 7 },
            { sessionId: 8 },
            { sessionId: 9 },
          ],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 1,
              rating: 1,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-16'),
            },
            {
              sessionId: 5,
              rating: 3,
              content: lorem.generateSentences(1),
              createdAt: new Date('2022-02-14'),
            },
            {
              sessionId: 7,
              rating: 4,
              content: lorem.generateSentences(4),
              createdAt: new Date('2022-02-13'),
            },
            {
              sessionId: 9,
              rating: 5,
              content: lorem.generateSentences(5),
              createdAt: new Date('2022-02-12'),
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
      sessionsOnUsers: {
        createMany: {
          data: [
            { sessionId: 1 },
            { sessionId: 2 },
            { sessionId: 4 },
            { sessionId: 6 },
            { sessionId: 8 },
            { sessionId: 10 },
          ],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 2,
              rating: 5,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-16'),
            },
            {
              sessionId: 6,
              rating: 3,
              content: lorem.generateSentences(1),
              createdAt: new Date('2022-02-14'),
            },
            {
              sessionId: 8,
              rating: 2,
              content: lorem.generateSentences(4),
              createdAt: new Date('2022-02-13'),
            },
            {
              sessionId: 10,
              rating: 1,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-12'),
            },
          ],
        },
      },
    },
  });

  await prisma.user.update({
    where: {
      email: 'amanda@unity3d.com',
    },
    data: {
      sessionsOnUsers: {
        createMany: {
          data: [{ sessionId: 1 }, { sessionId: 3 }],
        },
      },
      feedbacks: {
        createMany: {
          data: [
            {
              sessionId: 3,
              rating: 5,
              content: lorem.generateSentences(3),
              createdAt: new Date('2022-02-17'),
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
