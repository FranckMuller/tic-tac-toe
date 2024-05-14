import clsx from 'clsx'
import { MdClose } from "react-icons/md";

export function CrossIcon ({className}: {className?: string}) {
  return <MdClose className={clsx(className, "text-red-500")} />
}  