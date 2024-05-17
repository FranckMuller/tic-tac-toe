import { GAME_SYMBOLS, type TGameSymbol } from "./constants";
import { CircleIcon, CrossIcon, TriangleIcon, SquareIcon } from "./icons";

type Props = {
  symbol: TGameSymbol;
  className?: string;
};

export function GameSymbol({ symbol, className }: Props) {
  const Icon =
    {
      [GAME_SYMBOLS.ZERO]: CircleIcon,
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
