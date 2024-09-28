import type { FC } from "react";

type Props = {
  backLink: React.ReactElement;
  gameTitle: React.ReactElement;
  gameInfo: React.ReactElement;
  playersList: React.ReactElement[];
};

export const GameLayout: FC<Props> = ({
  backLink,
  gameTitle,
  gameInfo,
  playersList,
}) => {
  return (
    <div>
      <div className="ml-2">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>

      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between"
        }
      >
        {playersList}
      </div>
    </div>
  );
};
