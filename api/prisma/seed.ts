import { PrismaClient } from '@prisma/client';
import { LoremIpsum } from 'lorem-ipsum';
import * as faker from 'faker';

const fakeNameWithEmail = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    name: `${firstName} ${lastName}`,
    email: faker.internet.email(firstName, lastName),
  };
};

const fakeDate = () => faker.date.between(new Date('2022-02-01'), new Date('2022-02-20'));

const fakeDuration = () => faker.datatype.number({ min: 15, max: 120 });

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
    const data = new Array(5)
      .fill(null)
      .map((_, idx) => [
        {
          gameId: idx + 1,
          duration: fakeDuration(),
          startedAt: fakeDate(),
        },
        {
          gameId: idx + 1,
          duration: fakeDuration(),
          startedAt: fakeDate(),
        },
      ])
      .flat();

    await prisma.session.createMany({ data });
  }

  const isUserSeeded = await prisma.user.findFirst();
  if (!isUserSeeded) {
    const data = [{ email: 'lian.longfeng@unity3d.com', name: 'Lian Longfeng' }].concat(
      new Array(6).fill(null).map(() => fakeNameWithEmail()),
    );

    await prisma.user.createMany({ data });

    await prisma.user.update({
      where: { id: 1 },
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
                createdAt: fakeDate(),
              },
              {
                sessionId: 2,
                rating: 4,
                content: lorem.generateSentences(2),
                createdAt: fakeDate(),
              },
              {
                sessionId: 3,
                rating: 5,
                content: lorem.generateSentences(1),
                createdAt: fakeDate(),
              },
              {
                sessionId: 4,
                rating: 5,
                content: lorem.generateSentences(4),
                createdAt: fakeDate(),
              },
              {
                sessionId: 5,
                rating: 4,
                content: lorem.generateSentences(3),
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });

    await prisma.user.update({
      where: { id: 2 },
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
                createdAt: fakeDate(),
              },
              {
                sessionId: 3,
                rating: 4,
                content: lorem.generateSentences(2),
                createdAt: fakeDate(),
              },
              {
                sessionId: 5,
                rating: 3,
                content: lorem.generateSentences(1),
                createdAt: fakeDate(),
              },
              {
                sessionId: 7,
                rating: 2,
                content: lorem.generateSentences(4),
                createdAt: fakeDate(),
              },
              {
                sessionId: 9,
                rating: 1,
                content: lorem.generateSentences(3),
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });

    await prisma.user.update({
      where: { id: 3 },
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
                createdAt: fakeDate(),
              },
              {
                sessionId: 4,
                rating: 4,
                content: lorem.generateSentences(2),
                createdAt: fakeDate(),
              },
              {
                sessionId: 6,
                rating: 3,
                content: lorem.generateSentences(1),
                createdAt: fakeDate(),
              },
              {
                sessionId: 8,
                rating: 2,
                content: lorem.generateSentences(4),
                createdAt: fakeDate(),
              },
              {
                sessionId: 10,
                rating: 1,
                content: lorem.generateSentences(3),
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });

    await prisma.user.update({
      where: { id: 4 },
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
                createdAt: fakeDate(),
              },
              {
                sessionId: 5,
                rating: 3,
                content: lorem.generateSentences(1),
                createdAt: fakeDate(),
              },
              {
                sessionId: 7,
                rating: 4,
                content: lorem.generateSentences(4),
                createdAt: fakeDate(),
              },
              {
                sessionId: 9,
                rating: 5,
                content: lorem.generateSentences(5),
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });

    await prisma.user.update({
      where: { id: 5 },
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
                createdAt: fakeDate(),
              },
              {
                sessionId: 6,
                rating: 3,
                content: lorem.generateSentences(1),
                createdAt: fakeDate(),
              },
              {
                sessionId: 8,
                rating: 2,
                content: lorem.generateSentences(4),
                createdAt: fakeDate(),
              },
              {
                sessionId: 10,
                rating: 1,
                content: lorem.generateSentences(3),
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });

    await prisma.user.update({
      where: { id: 6 },
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
                createdAt: fakeDate(),
              },
            ],
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
