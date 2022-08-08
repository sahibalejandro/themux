import Pane from "./Pane";
import Clock from "./Clock";
import TmuxBar from "./TmuxBar";
import SessionsList from "./SessionsList";

export default function Terminal() {
  return (
    <div className="font-source-code-pro bg-slate-800 text-slate-50 rounded-xl">
      <div className="flex">
        <Pane className="flex-grow border-b border-slate-900">
          user@macbook-pro ~ $
        </Pane>
        <Pane className="flex-grow border-l border-b border border-lime-600">
          <SessionsList />
        </Pane>
      </div>
      <div>
        <Pane className="flex items-center justify-center">
          <Clock />
        </Pane>
      </div>
      <TmuxBar />
    </div>
  );
}
