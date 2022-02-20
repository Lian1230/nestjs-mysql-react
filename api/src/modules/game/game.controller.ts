import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';
import { Game } from '@prisma/client';

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('games')
  async getGames(
    @Query('userId') userId: string,
    @Query('includeSessions') includeSessions: string,
  ): Promise<Game[]> {
    return this.gameService.games({
      userId: Number.parseInt(userId),
      includeSessions: includeSessions === 'true',
    });
  }

  @Get('games/sessions-no-comment')
  async getGamesWithNoCommentSessions(@Query('userId') userId: string): Promise<Game[]> {
    return this.gameService.gamesWithSessionNoComment({
      userId: Number.parseInt(userId),
    });
  }
}
