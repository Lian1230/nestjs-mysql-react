import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Prisma, Session } from '@prisma/client';

@Injectable()
export class SessionService {
  constructor(private prisma: PrismaService) {}

  async sessions(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SessionWhereUniqueInput;
    where?: Prisma.SessionWhereInput;
    orderBy?: Prisma.SessionOrderByWithRelationInput;
  }): Promise<Partial<Session>[]> {
    return this.prisma.session.findMany({
      ...params,
      // include: { feedback: { select: { authorId: true } } },
    });
  }
}
