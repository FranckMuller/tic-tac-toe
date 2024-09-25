import type { PropsWithChildren, FC } from "react";
import { clsx } from "clsx";

type Props = PropsWithChildren & {
  className?: string;
};

export const GameFieldLayout: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
};
