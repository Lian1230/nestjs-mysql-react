import { Controller, Get, Body, Query } from '@nestjs/common';
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
}
