import TerminalColors from "./TerminalColors";

export default function Header() {
  return (
    <div className="flex items-center px-4 h-20 bg-slate-900 text-slate-100">
      <h1 className="text-2xl">Tmux Theme Editor</h1>
      <div className="ml-auto">
        <TerminalColors />
      </div>
    </div>
  );
}
