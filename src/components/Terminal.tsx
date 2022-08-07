import Pane from "./Pane";
import Clock from "./Clock";
import TmuxBar from "./TmuxBar";
import SessionsList from "./SessionsList";

export default function Terminal() {
  return (
    <div className="font-source-code-pro bg-slate-800 text-slate-50 p-2 rounded-xl">
      <div className="flex">
        <Pane className="flex-grow">user@macbook-pro ~ $</Pane>
        <Pane className="flex-grow">
          <SessionsList />
        </Pane>
      </div>
      <div>
        <Pane>
          <Clock />
        </Pane>
      </div>
      <TmuxBar />
    </div>
  );
}
