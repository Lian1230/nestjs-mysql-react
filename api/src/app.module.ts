import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { FeedbackController } from './modules/feedback/feedback.controller';
import { FeedbackService } from './modules/feedback/feedback.service';
import { SessionService } from './modules/session/session.service';
import { SessionController } from './modules/session/session.controller';
import { GameService } from './modules/game/game.service';
import { GameController } from './modules/game/game.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    FeedbackController,
    SessionController,
    GameController
  ],
  providers: [
    PrismaService,
    AppService,
    UserService,
    FeedbackService,
    SessionService,
    GameService
  ],
})
export class AppModule {}
