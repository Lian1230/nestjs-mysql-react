import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Feedback } from '@prisma/client';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async feedbacks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedbackWhereUniqueInput;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput;
  }): Promise<{ data: Partial<Feedback>[]; total: number }> {
    const { skip, take, cursor, where, orderBy } = params;
    const countQuery = { cursor, where, orderBy };
    const query = {
      ...countQuery,
      skip,
      take,
      include: { author: true, session: { include: { game: true } } },
    };

    const total = await this.prisma.feedback.count(countQuery);

    return this.prisma.feedback.findMany(query).then((res) => ({
      total,
      data: res.map(
        ({
          id,
          rating,
          content,
          createdAt,
          author: { name: authorName },
          session: {
            duration,
            game: { name: gameName },
          },
        }) => ({ id, rating, content, authorName, gameName, duration, createdAt }),
      ),
    }));
  }

  async createFeedback(data: {
    userId: number;
    sessionId: number;
    rating: number;
    content?: string;
  }): Promise<Feedback> {
    const { sessionId, content, userId, rating } = data;

    return this.prisma.feedback.create({
      data: {
        content,
        rating,
        session: {
          connect: { id: sessionId },
        },
        author: {
          connect: { id: userId },
        },
      },
    });
  }

  async isFeedbackCreated(params: { sessionId: number; userId: number }): Promise<boolean> {
    return this.prisma.session
      .findMany({
        where: {
          id: params.sessionId,
          feedbacks: {
            some: {
              authorId: params.userId,
            },
          },
        },
        // include: {
        //   feedbacks: true,
        // },
      })
      .then((sessions) => !!sessions.length);
  }
}
