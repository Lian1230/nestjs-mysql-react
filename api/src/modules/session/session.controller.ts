import { Controller, Get, Body } from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from '@prisma/client';

@Controller()
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get('uncommented-sessions')
  async getSessions(
    @Body() body: { gameId?: number; userId?: number },
  ): Promise<Partial<Session>[]> {
    const { gameId, userId: authorId } = body;

    return this.sessionService.sessions({
      where: {
        ...(gameId && { gameId }),
        feedback: {
          none: {
            ...(authorId && { authorId }),
          },
        },
      },
    });
  }
}
