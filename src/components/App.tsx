import Terminal from "./Terminal";
import ElementsPanel from "./ElementsPanel";
import TerminalColors from "./TerminalColors";

export default function App() {
  return (
    <div className="py-8">
      <div className="flex items-center px-4">
        <h1 className="text-5xl">Tmux Theme Editor</h1>
        <div className="ml-auto">
          <TerminalColors />
        </div>
      </div>
      <div className="flex mt-8">
        <div className="flex flex-grow justify-center bg-slate-300 py-8 border-r border-slate-300">
          <div className="w-[1024px]">
            <Terminal />
          </div>
        </div>
        <div className="w-[400px]">
          <ElementsPanel />
        </div>
      </div>
    </div>
  );
}
