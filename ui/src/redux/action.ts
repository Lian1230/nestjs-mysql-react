import { User, Game } from './types';

export enum ActionType {
  PersistGames = 'PERSIST_GAMES',
  PersistUser = 'PERSIST_USER',
  Logout = 'LOG_OUT',
}

export class PersistUser {
  readonly type = ActionType.PersistUser;
  constructor(public user: User) {}
}

export class PersistGames {
  readonly type = ActionType.PersistGames;
  constructor(public games: Game[]) {}
}

export class Logout {
  readonly type = ActionType.Logout;
}

export type Action = PersistUser | PersistGames | Logout;
