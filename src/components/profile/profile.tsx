import clsx from "clsx";
import { FC } from "react";
import { FaUser } from "react-icons/fa";

type Props = {
  className?: string;
  profile: IPlayer;
};

export const Profile: FC<Props> = ({ className, profile }) => {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-start")}>
      <div>
        <div className="w-10 h-10 text-slate-300 bg-teal-600 text-lg rounded-full flex items-center justify-center">
          <FaUser className="text-slate-50 w-5 h-5" />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="text-teal-600 text-sm truncate">{profile.name}</div>
        <div className="text-slate-400 text-xs">Рейтинг: {profile.rating}</div>
      </div>
    </div>
  );
};
