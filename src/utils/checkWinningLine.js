const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const checkWinningLine = squares => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].owner &&
      squares[a].owner === squares[b].owner &&
      squares[a].owner === squares[c].owner
    ) {
      return {
        winningLine: lines[i],
        winner: squares[a].owner
      };
    }
  }
  return null;
};
