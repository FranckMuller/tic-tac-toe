export const GAME_SYMBOLS = {
  ZERO: "ZERO",
  CROSS: "CROSS",
  TRIANGLE: "TRIANGLE",
  SQUARE: "SQUARE"
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE
];

export type GameSymbols = typeof GAME_SYMBOLS;
export type TGameSymbol = (typeof GAME_SYMBOLS)[keyof typeof GAME_SYMBOLS];
