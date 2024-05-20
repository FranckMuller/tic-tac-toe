import { GAME_SYMBOLS } from "./components/game/constants";
import type { StaticImageData } from "next/image";

export type TPlayer = {
  id: number;
  name: string;
  avatar: StaticImageData;
  rating: number;
  symbol: TGameSymbol;
};

export type GameSymbols = typeof GAME_SYMBOLS;
export type TGameSymbol = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS];
