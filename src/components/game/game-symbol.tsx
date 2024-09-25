import type { FC } from "react";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { CircleIcon } from "./icons/circle-icon";
import { GAME_SYMBOLS, type TSymbol } from "./constants";

type Props = {
  className?: string;
  symbol: TSymbol;
};

export const GameSymbol: FC<Props> = ({ className, symbol }) => {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.ZERO]: CircleIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
};
