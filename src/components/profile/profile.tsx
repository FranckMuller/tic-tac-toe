import Image from "next/image";
import clsx from "clsx";
import type { StaticImageData } from "next/image";

import avatarSrc from "./man.png";

type Props = {
  name: string;
  rating: number;
  avatar: StaticImageData;
  className?: string;
};

export function Profile({ name, rating, avatar, className }: Props) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-teal-600 text-start ml-auto"
      )}
    >
      <Image src={avatar} width={38} height={38} alt="avatar" />
      <div className="overflow-hidden">
        <div className="text-sm leading-tight truncate">{name}</div>
        <div className="text-xs text-slate-400 leading-tight">rating: {rating}</div>
      </div>
    </div>
    
  );
}
