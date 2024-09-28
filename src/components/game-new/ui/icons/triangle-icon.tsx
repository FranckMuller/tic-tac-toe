import clsx from "clsx";
import { LuTriangle } from "react-icons/lu";
import type { IconProps } from "./types";
import type { FC } from "react";

export const TriangleIcon: FC<IconProps> = ({ className }) => {
  return (
    <LuTriangle
      width={12}
      height={12}
      className={clsx(className, "text-indigo-700")}
    />
  );
};
