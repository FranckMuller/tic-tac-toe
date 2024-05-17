import clsx from 'clsx'
import { BsTriangle } from "react-icons/bs";

export function TriangleIcon({ className }: { className?: string }) {
  return <BsTriangle className={clsx(className, 'text-sky-700')} />;
}
