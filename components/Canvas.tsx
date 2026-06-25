"use client";

import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  MarkerType,
  type Connection,
  type Edge,
} from "reactflow";

import "reactflow/dist/style.css";
import type { NodeItem } from "../app/page";
import SystemNode from "./nodes/SystemNode";

type CanvasProps = {
  nodes: NodeItem[];
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
};

const nodeTypes = {
  system: SystemNode,
};

export default function Canvas({ nodes, edges, setEdges }: CanvasProps) {
  const flowNodes = nodes.map((node, index) => ({
    id: String(node.id),
    position: {
      x: 120 + index * 220,
      y: 120,
    },
    data: {
      label: node.label,
    },
    type: "system",
  }));

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) =>
        addEdge(
          {
            ...connection,
            markerEnd: {
              type: MarkerType.ArrowClosed,
            },
          },
          currentEdges
        )
      );
    },
    [setEdges]
  );

  return (
    <section className="relative bg-slate-950 p-6">
      <div className="h-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
        <ReactFlow
          nodes={flowNodes}
          edges={edges}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </section>
  );
}