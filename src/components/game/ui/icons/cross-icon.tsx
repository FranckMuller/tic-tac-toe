import clsx from 'clsx'
import { MdOutlineClose } from "react-icons/md";

export function CrossIcon ({className}: {className?: string}) {
  return <MdOutlineClose className={clsx(className, "text-red-500")} />
}  