import { Position } from "reactflow";

export const initialNodes = [
  {
    id: "shamu",
    position: { x: 0, y: 0 },
    data: { label: "Shamu" },
    sourcePosition: Position.Bottom,
    sourceHandles: [{ id: "shamu-handle-1", position: "right" }],
  },
  {
    id: "shamusWife",
    position: { x: 300, y: 0 },
    data: { label: "Shamu's Wife" },
    targetPosition: Position.Bottom,
    targetHandles: [{ id: "shamusWife-handle-4", position: "left" }],
  },
];
