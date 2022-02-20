import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from '@prisma/client';

@Controller()
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get('feedback/:id')
  async getFeedbackById(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.feedback({ id: Number(id) });
  }

  @Get('feedbacks')
  async getFeedbacks(
    @Query('pageSize') pageSize: string,
    @Query('current') current: string,
    @Query('startedAt') startedAt: string,
    @Query('endTime') endTime: string,
    @Query('sort') sort: string,
  ): Promise<{ data: Partial<Feedback>[]; page: number; total: number }> {
    const size = Number.parseInt(pageSize);
    const page = Number.parseInt(current);

    return this.feedbackService
      .feedbacks({
        skip: size * (page - 1),
        take: size,
        where: {
          createdAt: {
            ...(startedAt && { gte: new Date(startedAt) }),
            ...(endTime && { lte: new Date(endTime) }),
          },
        },
        ...(sort && {
          orderBy: {
            [sort.slice(1)]: sort.slice(0, 1) == '+' ? 'asc' : 'desc',
          },
        }),
      })
      .then(({ total, data }) => ({ data, page, total }));
  }

  @Post('feedback')
  async createFeedback(
    @Body()
    postData: {
      userId: number;
      sessionId: number;
      rating: number;
      content?: string;
    },
  ): Promise<Feedback> {
    const { sessionId, content, userId, rating } = postData;
    const isFeedbackCreated = await this.feedbackService.isFeedbackCreated({ sessionId, userId });
    if (isFeedbackCreated) {
      throw new HttpException(
        `A feedback for this session was already created`,
        HttpStatus.FORBIDDEN,
      );
    }
    return this.feedbackService
      .createFeedback({
        content,
        rating,
        session: {
          connect: { id: sessionId },
        },
        author: {
          connect: { id: userId },
        },
      })
      .catch((err) => {
        if (err?.message?.includes('Unique constraint failed on the constraint')) {
          throw new HttpException(
            'Failed due to conflict. Feedback might already craeted',
            HttpStatus.CONFLICT,
          );
        }
        throw new HttpException('Unknown service error', HttpStatus.INTERNAL_SERVER_ERROR);
      });
  }
}
