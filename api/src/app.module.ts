import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { FeedbackController } from './modules/feedback/feedback.controller';
import { FeedbackService } from './modules/feedback/feedback.service';
import { GameService } from './modules/game/game.service';
import { GameController } from './modules/game/game.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'build'),
    }),
  ],
  controllers: [AppController, UserController, FeedbackController, GameController],
  providers: [PrismaService, AppService, UserService, FeedbackService, GameService],
})
export class AppModule {}
