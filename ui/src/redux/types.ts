export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Session {
  id: number,
  startedAt: string,
  duration: number,
}

export interface Game {
  id: number;
  name: string;
  sessions?: Session[]
}

export interface Feedback {
  id: number;
  rating: number;
  content: string;
  authorName: string;
  gameName: string;
  duration: number;
  createdAt: string;
}