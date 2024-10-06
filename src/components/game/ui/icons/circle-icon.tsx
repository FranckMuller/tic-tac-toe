import clsx from "clsx";
import { GoCircle } from "react-icons/go";
import type { FC } from "react";
import type { IconProps } from "./types";

export const CircleIcon: FC<IconProps> = ({ className }) => {
  return (
    <GoCircle
      width={12}
      height={12}
      className={clsx(className, "text-teal-600")}
    />
  );
};
