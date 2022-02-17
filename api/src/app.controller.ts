import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FeedbackService } from './modules/feedback/feedback.service';
import { Feedback } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: FeedbackService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
