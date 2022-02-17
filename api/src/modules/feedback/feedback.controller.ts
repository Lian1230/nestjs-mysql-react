import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from '@prisma/client';

@Controller()
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Get('feedback/:id')
  async getPostById(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.feedback({ id: Number(id) });
  }

  @Get('feedbacks')
  async getPublishedPosts(
    @Query('dateRage') dateRange: string,
    @Query('sort') sort: string,
  ): Promise<Feedback[]> {
    const [fromDate, toDate] = dateRange.split(',').map((s) => new Date(s));

    return this.feedbackService.feedbacks({
      where: { timeCreated: { gte: fromDate, lte: toDate } },
      ...(sort && {
        orderBy: { [sort.slice(1)]: sort.slice(0, 1) == '+' ? 'asc' : 'desc' },
      }),
    });
  }

  @Post('feedback')
  async createDraft(
    @Body()
    postData: {
      sessionId: number;
      rating: number;
      content?: string;
      userId: number;
    },
  ): Promise<Feedback> {
    const { sessionId, content, userId, rating } = postData;
    return this.feedbackService.createPost({
      content,
      rating,
      timeCreated: new Date(),
      session: {
        connect: { id: sessionId },
      },
      author: {
        connect: { id: userId },
      },
    });
  }

  // @Get('filtered-posts/:searchString')
  // async getFilteredPosts(
  //   @Param('searchString') searchString: string,
  // ): Promise<Feedback[]> {
  //   return this.postService.posts({
  //     where: {
  //       OR: [
  //         {
  //           title: { contains: searchString },
  //         },
  //         {
  //           content: { contains: searchString },
  //         },
  //       ],
  //     },
  //   });
  // }

  // @Delete('feedback/:id')
  // async deletePost(@Param('id') id: string): Promise<Feedback> {
  //   return this.feedbackService.deletePost({ id: Number(id) });
  // }
}
