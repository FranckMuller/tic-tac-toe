import { SYMBOL_X, SYMBOL_O, type Symbol } from "@/components/constants";

type Props = {
  symbol: Symbol;
};

export function GameSymbol({ symbol }: Props) {
  const getSymbolClassName = (cell: string | null) => {
    if (cell === SYMBOL_X) return "game-cell--x";
    if (cell === SYMBOL_O) return "game-cell--o";
    return "";
  };

  if (!symbol) return null;

  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  );
}
