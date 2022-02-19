export enum ActionType {
  PersistUser = 'PERSIST_USER',
  Logout = 'LOG_OUT',
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export class PersistUser {
  readonly type = ActionType.PersistUser;
  constructor(public user: User) {}
}

export class Logout {
  readonly type = ActionType.Logout;
}

export type Action = PersistUser | Logout;
