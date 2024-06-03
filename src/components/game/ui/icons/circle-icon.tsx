import clsx from 'clsx'
import { FaRegCircle } from "react-icons/fa";

export function CircleIcon ({className}: {className?: string}) {
  return <FaRegCircle className={clsx(className, 'text-teal-500')} />
}  