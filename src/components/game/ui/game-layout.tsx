type Props = {
  backLink: React.ReactNode;
  gameTitle: React.ReactNode;
  gameInfo: React.ReactNode;
  playersList: React.ReactNode;
  gameMoveInfo: React.ReactNode;
  actions: React.ReactNode;
  gameCells: React.ReactNode;
};

export function GameLayout({
  backLink,
  gameTitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells
}: Props) {
  return (
    <div>
      <div className="pl-1">
        {backLink}
        {gameTitle}
        {gameInfo}
      </div>
      <div className="grid grid-cols-2 gap-3 bg-white shadow-md rounded-lg py-4 px-8">
        {playersList}
      </div>
      <div className="mt-4 bg-white shadow-md rounded-lg px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>

        <div className="grid grid-rows-[repeat(19,_28px)] grid-cols-[repeat(19,_28px)] mt-5 pl-px pt-px">
          {gameCells}
        </div>
      </div>
    </div>
  );
}
