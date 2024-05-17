import clsx from 'clsx'
import { FaRegSquare } from "react-icons/fa6";

export function SquareIcon({ className }: { className?: string }) {
  return <FaRegSquare className={clsx(className, 'text-emerald-800')} />;
}