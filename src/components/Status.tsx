import { observer } from "mobx-react-lite";

import store from "../store";
import Selectable from "./Selectable";
import { keepWhitespaces } from "../utils";

function Status() {
  const statusStyles = store.getElementStyles("status", "text");
  const statusLeftStyles = store.getElementStyles("statusLeft", "text");
  const statusRightStyles = store.getElementStyles("statusRight", "text");
  const windowStatusStyles = store.getElementStyles("windowStatus", "text");
  const windowStatusCurrentStyles = store.getElementStyles(
    "windowStatusCurrent",
    "text"
  );
  const statusLeftBefore = keepWhitespaces(
    store.getPropertyValue("statusLeft", "text-before", "prefix")
  );
  const statusLeftAfter = keepWhitespaces(
    store.getPropertyValue("statusLeft", "text-after", "suffix")
  );
  const statusRightBefore = keepWhitespaces(
    store.getPropertyValue("statusRight", "text-before", "prefix")
  );
  const statusRightAfter = keepWhitespaces(
    store.getPropertyValue("statusRight", "text-after", "suffix")
  );

  return (
    <Selectable terminalComponentName="status" style={statusStyles}>
      <div className="flex">
        <Selectable terminalComponentName="statusLeft" style={statusLeftStyles}>
          <div>
            {statusLeftBefore}themux{statusLeftAfter}
          </div>
        </Selectable>
        <Selectable
          terminalComponentName="windowStatus"
          style={windowStatusStyles}
        >
          <div>0:inactive-</div>
        </Selectable>
        <Selectable
          terminalComponentName="windowStatusCurrent"
          style={windowStatusCurrentStyles}
        >
          <div>1:active*</div>
        </Selectable>
        <Selectable
          terminalComponentName="windowStatus"
          style={windowStatusStyles}
        >
          <div>2:inactive</div>
        </Selectable>
        <div className="grow"></div>
        <Selectable
          terminalComponentName="statusRight"
          style={statusRightStyles}
        >
          <div>
            {statusRightBefore}09 Aug 2022{statusRightAfter}
          </div>
        </Selectable>
      </div>
    </Selectable>
  );
}

export default observer(Status);
