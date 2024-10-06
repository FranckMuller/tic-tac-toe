import clsx from "clsx";
import { FaRegSquare } from "react-icons/fa";
import type { FC } from "react";
import type { IconProps } from "./types";

export const SquareIcon: FC<IconProps> = ({ className }) => {
  return (
    <FaRegSquare
      width={12}
      height={12}
      className={clsx(className, "text-fuchsia-700")}
    />
  );
};
