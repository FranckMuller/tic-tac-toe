import Image from "next/image";

import avatarSrc from "./man.png";

export function Profile() {
  return (
    <div className="flex items-center gap-2 text-teal-600 text-start ml-auto">
      <Image src={avatarSrc} width={38} height={38} alt="avatar" />
      <div>
        <div className="text-sm leading-tight">Dimasta</div>
        <div className="text-xs text-slate-400 leading-tight">rating: 1400</div>
      </div>
    </div>
  );
}
