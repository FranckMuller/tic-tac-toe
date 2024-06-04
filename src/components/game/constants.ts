import avatarSrc from "./ui/images/man.png";
import type { TPlayer } from "@/types";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square"
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE
];

export const PLAYERS: Array<TPlayer> = [
  {
    id: 1,
    name: "Dimasta",
    rating: 1500,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.CROSS
  },
  {
    id: 2,
    name: "Dimasta Chack Norris",
    rating: 900,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.ZERO
  },
  {
    id: 3,
    name: "Olesya Novokreschenova",
    rating: 1420,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.TRIANGLE
  },
  {
    id: 4,
    name: "Mazepa",
    rating: 0,
    avatar: avatarSrc,
    symbol: GAME_SYMBOLS.SQUARE
  }
];
