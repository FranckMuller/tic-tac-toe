import clsx from "clsx";

type Props = {
  className?: string;
  variant: "primary" | "outline";
  size: "lg" | "md";
  children: React.ReactNode;
};

export function UiButton({ className, variant, size, children }: Props) {
  const buttonClassName = clsx(
    "transition-colors rounded-sm leading-tight",
    className,
    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white",
      outline: "bg-white hover:bg-teal-50 text-teal-600 border border-teal-600"
    }[variant],
    {
      lg: "px-5 py-1 text-sm",
      md: "px-3 py-1 text-xs"
    }[size]
  );

  return <button className={buttonClassName}>{children}</button>;
}
