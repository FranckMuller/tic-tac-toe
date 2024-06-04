import { GAME_SYMBOLS } from "./components/game/constants";
import type { StaticImageData } from "next/image";

export type TPlayer = {
  id: number;
  name: string;
  avatar: StaticImageData;
  rating: number;
  symbol: TGameSymbol;
};

export type GameSymbolsKeys = keyof typeof GAME_SYMBOLS; // ZERO | CROSS | | TRIANGLE | SQUARE
export type SymbolValues = (typeof GAME_SYMBOLS)[GameSymbolsKeys]; // zero | cross | triangle | square
export type TGameSymbol = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS];
