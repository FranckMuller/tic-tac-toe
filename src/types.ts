import { GAME_SYMBOLS } from "@/components/game/constants";

export interface IProfile {
  id: number;
  name: string;
  rating: number;
}
export type TSymbol = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS];

export interface IPlayer extends IProfile {
  symbol: TSymbol;
}
