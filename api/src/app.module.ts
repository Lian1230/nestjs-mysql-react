import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { FeedbackController } from './modules/feedback/feedback.controller';
import { FeedbackService } from './modules/feedback/feedback.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, FeedbackController],
  providers: [PrismaService, AppService, UserService, FeedbackService],
})
export class AppModule {}