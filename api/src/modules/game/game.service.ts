import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Game } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async games(params: {
    userId?: number;
    includeSessions: boolean;
  }): Promise<Game[]> {
    const { userId: authorId, includeSessions = false } = params;
    return this.prisma.game.findMany({
      where: {
        ...(authorId && {
          session: {
            some: {
              feedback: {
                some: {
                  authorId,
                },
              },
            },
          },
        }),
      },
      include: {
        session: includeSessions && {
          select: {
            id: true,
            startTime: true,
            duration: true,
          },
        },
      },
    });
  }
}
