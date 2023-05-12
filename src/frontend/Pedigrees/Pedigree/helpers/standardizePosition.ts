type Position = {
  x: number;
  y: number;
};

export const standardizePosition = (position: Position) => {
  return {
    x: Math.round(position.x * 0.05) * 20,
    y: Math.round(position.y * 0.05) * 20,
  };
};
