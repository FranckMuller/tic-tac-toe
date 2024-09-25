import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
  size?: "md" | "lg";
  variant?: "outline" | "primary";
};

export const UiButton: FC<Props> = ({
  children,
  className,
  size = "md",
  variant = "primary",
}) => {
  const buttonClassName = clsx(
    className,
    "rounded-lg transition-colors",
    {
      md: "py-2 px-6 text-sm",
      lg: "py-2 px-5 text-lg",
    }[size],
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "bg-white border border-teal-600 hover:bg-teal-50 text-teal-600",
    }[variant]
  );

  return <button className={buttonClassName}>{children}</button>;
};
