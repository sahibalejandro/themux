import TerminalColors from "./TerminalColors";
import GenerateConfig from "./GenerateConfig";

export default function Header() {
  return (
    <div className="flex items-center px-4 h-20 bg-slate-900 text-slate-100">
      <h1 className="text-2xl">Tmux Theme Editor</h1>
      <div className="ml-auto">
        <TerminalColors />
      </div>
      <div className="ml-4">
        <GenerateConfig />
      </div>
    </div>
  );
}
