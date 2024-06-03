import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export function BackLink () {
  return (
    <Link
        className="text-teal-600 text-xs flex items-center gap-1 -mb-1"
        href="#"
      >
        <FaArrowLeft />
        To main
      </Link>
    )
}