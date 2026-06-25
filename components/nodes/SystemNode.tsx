import { Handle, Position } from "reactflow";

type Props = {
  data: {
    label: string;
  };
};

const nodeDetails: Record<
  string,
  {
    icon: string;
    description: string;
    color: string;
  }
> = {
  Client: {
    icon: "💻",
    description: "User-facing frontend application",
    color: "bg-blue-500",
  },
  "API Server": {
    icon: "🟢",
    description: "Handles requests and business logic",
    color: "bg-green-500",
  },
  Database: {
    icon: "🗄️",
    description: "Stores persistent application data",
    color: "bg-orange-500",
  },
  Cache: {
    icon: "⚡",
    description: "Speeds up frequent data access",
    color: "bg-purple-500",
  },
  Queue: {
    icon: "📨",
    description: "Manages asynchronous background jobs",
    color: "bg-red-500",
  },
};

export default function SystemNode({ data }: Props) {
  const detail = nodeDetails[data.label] ?? {
    icon: "📦",
    description: "System component",
    color: "bg-slate-600",
  };

  return (
    <div className="relative w-56 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white shadow-xl">
      <Handle type="target" position={Position.Left} />

      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg ${detail.color}`}
        >
          {detail.icon}
        </div>

        <div>
          <h3 className="text-sm font-semibold">{data.label}</h3>
          <p className="mt-1 text-xs text-slate-400">
            {detail.description}
          </p>
        </div>
      </div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}