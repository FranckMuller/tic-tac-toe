import clsx from "clsx";
import type { PropsWithChildren, FC } from "react";

type Props = PropsWithChildren & {
  isWinner: boolean;
  disabled: boolean;
  onClick: () => void;
};

export const GameCell: FC<Props> = ({
  onClick,
  isWinner,
  children,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center border border-slate-200 -ml-px -mt-px",
        isWinner && "bg-orange-600/10"
      )}
    >
      {children}
    </button>
  );
};
