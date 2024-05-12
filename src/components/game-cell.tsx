type Props = {
  children: React.ReactNode;
  isWinner?: boolean;
  onClick: () => void;
};

export function GameCell({ isWinner, onClick, children }: Props) {
  return (
    <div
      className={`game-cell ${isWinner ? "game-cell--win" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
