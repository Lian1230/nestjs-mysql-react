import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Feedback } from '@prisma/client';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaService) {}

  async feedback(
    postWhereUniqueInput: Prisma.FeedbackWhereUniqueInput,
  ): Promise<Feedback | null> {
    return this.prisma.feedback.findUnique({
      where: postWhereUniqueInput,
    });
  }

  async feedbacks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.FeedbackWhereUniqueInput;
    where?: Prisma.FeedbackWhereInput;
    orderBy?: Prisma.FeedbackOrderByWithRelationInput;
  }): Promise<Feedback[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.feedback.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPost(data: Prisma.FeedbackCreateInput): Promise<Feedback> {
    return this.prisma.feedback.create({
      data,
    });
  }

  async updatePost(params: {
    where: Prisma.FeedbackWhereUniqueInput;
    data: Prisma.FeedbackUpdateInput;
  }): Promise<Feedback> {
    const { data, where } = params;
    return this.prisma.feedback.update({
      data,
      where,
    });
  }

  async deletePost(where: Prisma.FeedbackWhereUniqueInput): Promise<Feedback> {
    return this.prisma.feedback.delete({
      where,
    });
  }
}
