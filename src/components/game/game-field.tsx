import type { PropsWithChildren } from "react";
import clsx from "clsx";
import { UiButton } from "../uikit";
import { CrossIcon, CircleIcon } from "./icons";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }: { className?: string }) {
  return (
    <GameFieldLayout className={className}>
      <div className="flex items-center gap-2">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-md font-semibold">
            Current: <CrossIcon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            Next: <CircleIcon className="w-3 h-3" />
          </div>
        </div>

        <UiButton size="md" variant="primary">
          Give up
        </UiButton>
        <UiButton size="md" variant="outline">
          Draw
        </UiButton>
      </div>

      <div className="grid grid-rows-[repeat(19,_28px)] grid-cols-[repeat(19,_28px)] mt-5 pl-px pt-px">
        {cells.map((_, idx) => (
          <button
            key={idx}
            className="flex items-center justify-center border border-slate-200 -ml-px -mt-px"
          ></button>
        ))}
      </div>
    </GameFieldLayout>
  );
}

function GameFieldLayout({
  className,
  children
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx(className, "bg-white shadow-md rounded-lg px-2 py-4")}>
      {children}
    </div>
  );
}
