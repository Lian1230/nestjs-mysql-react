export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Session {
  id: number,
  startTime: string,
  duration: number,
}

export interface Game {
  id: number;
  name: string;
  session?: Session[]
}
