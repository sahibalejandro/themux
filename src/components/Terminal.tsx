import { observer } from "mobx-react-lite";

import store from "../store";
import Pane from "./Pane";
import Clock from "./Clock";
import Status from "./Status";
import SessionsList from "./SessionsList";
import Selectable from "./Selectable";

function Terminal() {
  const style = store.getElementStyles("terminal");

  return (
    <div
      className="font-source-code-pro rounded-lg overflow-hidden shadow-md"
      style={style}
    >
      <div className="flex">
        <Selectable element="pane" className="basis-1/2">
          <Pane element="pane" className="border-b border-slate-900">
            sahib@macbook-pro ~ $
          </Pane>
        </Selectable>
        <Selectable element="paneActive" className="basis-1/2">
          <Pane
            element="paneActive"
            className="border-l border-b border-lime-600"
          >
            <SessionsList />
          </Pane>
        </Selectable>
      </div>
      <div>
        <Pane element="pane" className="flex items-center justify-center">
          <Selectable element="clock">
            <Clock />
          </Selectable>
        </Pane>
      </div>
      <Status />
    </div>
  );
}

export default observer(Terminal);
