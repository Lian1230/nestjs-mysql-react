import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Game } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async games(params: { userId?: number; includeSessions: boolean }): Promise<Game[]> {
    const { userId, includeSessions = false } = params;
    return this.prisma.game.findMany({
      where: {
        ...(userId && {
          sessions: {
            some: {
              sessionsOnUsers: {
                some: { userId },
              },
            },
          },
        }),
      },
      include: {
        sessions: includeSessions && {
          select: {
            id: true,
            startedAt: true,
            duration: true,
          },
          where: {
            ...(userId && {
              sessionsOnUsers: {
                some: { userId },
              },
            }),
          },
        },
      },
    });
  }

  async gamesWithSessionNoComment(params: { userId: number }): Promise<Game[]> {
    const { userId } = params;
    return this.prisma.game.findMany({
      where: {
        ...(userId && {
          sessions: {
            some: {
              sessionsOnUsers: {
                some: { userId },
              },
              feedbacks: {
                none: { authorId: userId },
              },
            },
          },
        }),
      },
      include: {
        sessions: {
          select: {
            id: true,
            startedAt: true,
            duration: true,
          },
          where: {
            sessionsOnUsers: {
              some: { userId },
            },
            feedbacks: {
              none: { authorId: userId },
            },
          },
        },
      },
    });
  }
}
