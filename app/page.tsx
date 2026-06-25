"use client";

import { useState } from "react";
import type { Edge } from "reactflow";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Canvas from "../components/Canvas";

export type NodeItem = {
  id: number;
  label: string;
};

export default function Home() {
  const [nodes, setNodes] = useState<NodeItem[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  function addNode(label: string) {
    const newNode = {
      id: Date.now(),
      label,
    };

    setNodes([...nodes, newNode]);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="grid min-h-[calc(100vh-89px)] grid-cols-[280px_1fr]">
        <Sidebar onAddNode={addNode} />
<Canvas nodes={nodes} edges={edges} setEdges={setEdges} />
      </section>
    </main>
  );
}