import { standardizePosition } from ".";
import { Node } from "reactflow";

export const handleOnNodeDragStop =
  ({
    nodes,
    setNodes,
  }: {
    nodes: Node[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  }) =>
  (event: any, node: Node) => {
    const { id, position } = node;
    const standardizedPosition = standardizePosition({
      x: position.x,
      y: position.y,
    });
    const updatedNodes = nodes.map((node: Node) => {
      if (node.id === id) {
        return { ...node, position: standardizedPosition };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

export const onDragStart = (event: any, nodeType: any) => {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
};
