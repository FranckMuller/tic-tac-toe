import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export const BackLink = () => {
  return (
    <Link href="#" className="text-xs text-teal-600 flex items-center gap-2">
      <GoArrowLeft /> На главную
    </Link>
  );
};
