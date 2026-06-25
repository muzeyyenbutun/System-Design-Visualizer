type SidebarProps = {
  onAddNode: (label: string) => void;
};

const components = ["Client", "API Server", "Database", "Cache", "Queue"];

export default function Sidebar({ onAddNode }: SidebarProps) {
  return (
    <aside className="border-r border-slate-800 bg-slate-900 p-5">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400">
        Components
      </h2>

      <div className="space-y-3">
        {components.map((component) => (
          <button
            key={component}
            onClick={() => onAddNode(component)}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-left hover:bg-slate-700"
          >
            {component}
          </button>
        ))}
      </div>
    </aside>
  );
}