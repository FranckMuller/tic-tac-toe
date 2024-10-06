import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import type { FC } from "react";
import type { IconProps } from "./types";

export const CrossIcon: FC<IconProps> = ({ className }) => {
  return (
    <IoMdClose
      width={16}
      height={16}
      className={clsx(className, "text-orange-600")}
    />
  );
};
