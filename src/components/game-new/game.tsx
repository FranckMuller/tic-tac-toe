import { GameTitle } from "./ui/game-title";
import { BackLink } from "./ui/back-link";
import { GameLayout } from "./ui/game-layout";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-info";
import { PLAYERS } from "./constants";

export const Game = () => {
  return (
    <GameLayout
      backLink={<BackLink />}
      gameTitle={<GameTitle />}
      gameInfo={
        <GameInfo isRatingGame playersCount={4} timeMode="5 мин. на ход" />
      }
      playersList={PLAYERS.map((player, idx) => (
        <PlayerInfo
          key={player.id}
          player={player}
          isTimerRunning={false}
          isRight={idx % 2 === 1}
          seconds={60}
        />
      ))}
    />
  );
};
