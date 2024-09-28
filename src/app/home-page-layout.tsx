import type { FC, PropsWithChildren } from "react";

type Props = {
  header: React.ReactElement;
} & PropsWithChildren;

export const HomePageLayout: FC<Props> = ({ header, children }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-10">
      {header}
      <main className="pt-8 w-max mx-auto">{children}</main>
    </div>
  );
};
