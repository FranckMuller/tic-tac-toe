import type { FC } from "react";

type Props = {
  backLink: React.ReactElement;
  gameTitle: React.ReactElement;
  gameInfo: React.ReactElement;
  playersList: React.ReactElement[];
  gameMoveInfo: React.ReactElement;
  gameCells: React.ReactElement[];
};

export const GameLayout: FC<Props> = ({
  backLink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  gameCells,
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

      <div
        className={"mt-4 mb-10 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"}
      >
        <div className="flex items-center gap-3">{gameMoveInfo}</div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pt-px pl-px mt-4">
          {gameCells}
        </div>
      </div>
    </div>
  );
};
