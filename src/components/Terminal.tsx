import Pane from "./Pane";
import Clock from "./Clock";
import Status from "./Status";
import SessionsList from "./SessionsList";
import Selectable from "./Selectable";

export default function Terminal() {
  return (
    <div className="font-source-code-pro bg-slate-800 text-slate-50 rounded-lg overflow-hidden shadow-md">
      <div className="flex">
        <Selectable
          element="pane"
          className="basis-1/2 border-b border-slate-900"
        >
          <Pane>sahib@macbook-pro ~ $</Pane>
        </Selectable>
        <Selectable
          element="paneActive"
          className="basis-1/2 border-l border-b border-lime-600"
        >
          <Pane>
            <SessionsList />
          </Pane>
        </Selectable>
      </div>
      <div>
        <Pane className="flex items-center justify-center">
          <Selectable element="clock">
            <Clock />
          </Selectable>
        </Pane>
      </div>
      <Status />
    </div>
  );
}
