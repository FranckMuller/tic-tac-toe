export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  SQUARE: "square",
  TRIANGLE: "triangle",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.SQUARE,
  GAME_SYMBOLS.TRIANGLE,
];

export const PLAYERS = [
  {
    id: 2,
    name: "AnastasiyaGorgeous",
    rating: 500,
    symbol: GAME_SYMBOLS.CROSS,
  },
  { id: 1, name: "Dimasta", rating: 1000, symbol: GAME_SYMBOLS.ZERO },
  { id: 3, name: "Vera", rating: 1500, symbol: GAME_SYMBOLS.SQUARE },
  { id: 4, name: "Monro", rating: 11500, symbol: GAME_SYMBOLS.TRIANGLE },
];
