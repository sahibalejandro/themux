import Terminal from "./Terminal";
import ElementsPanel from "./ElementsPanel";
import TerminalColors from "./TerminalColors";

export default function App() {
  return (
    <div className="px-8 pb-16">
      <h1 className="text-5xl mt-8">Tmux Theme Editor</h1>
      <div className="text-right">
        <TerminalColors />
      </div>
      <div className="flex mt-8">
        <div className="flex flex-grow justify-center bg-slate-300 py-8">
          <div className="w-[1024px]">
            <Terminal />
          </div>
        </div>
        <div className="ml-4 w-[400px]">
          <ElementsPanel />
        </div>
      </div>
    </div>
  );
}
