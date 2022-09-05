import { observer } from "mobx-react-lite";

import store from "../store";
import Selectable from "./Selectable";
import { keepWhitespaces } from "../utils";

function Status() {
  const statusStyles = store.getElementStyles("status", "text");
  const statusLeftStyles = store.getElementStyles("statusLeft", "text");
  const statusLeftBeforeStyles = store.getElementStyles(
    "statusLeft",
    "text-before"
  );
  const statusLeftAfterStyles = store.getElementStyles(
    "statusLeft",
    "text-after"
  );
  const statusRightStyles = store.getElementStyles("statusRight", "text");
  const statusRightBeforeStyles = store.getElementStyles(
    "statusRight",
    "text-before"
  );
  const statusRightAfterStyles = store.getElementStyles(
    "statusRight",
    "text-after"
  );
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
  const windowStatusBefore = keepWhitespaces(
    store.getPropertyValue("windowStatus", "text-before", "prefix")
  );
  const windowStatusAfter = keepWhitespaces(
    store.getPropertyValue("windowStatus", "text-after", "suffix")
  );
  const windowStatusBeforeStyles = store.getElementStyles(
    "windowStatus",
    "text-before"
  );
  const windowStatusAfterStyles = store.getElementStyles(
    "windowStatus",
    "text-after"
  );
  const windowStatusCurrentBefore = keepWhitespaces(
    store.getPropertyValue("windowStatusCurrent", "text-before", "prefix")
  );
  const windowStatusCurrentAfter = keepWhitespaces(
    store.getPropertyValue("windowStatusCurrent", "text-after", "suffix")
  );
  const windowStatusCurrentBeforeStyles = store.getElementStyles(
    "windowStatusCurrent",
    "text-before"
  );
  const windowStatusCurrentAfterStyles = store.getElementStyles(
    "windowStatusCurrent",
    "text-after"
  );

  return (
    <Selectable terminalComponentName="status" style={statusStyles}>
      <div className="flex">
        <Selectable className="flex" terminalComponentName="statusLeft">
          <div style={statusLeftBeforeStyles}>{statusLeftBefore}</div>
          <div style={statusLeftStyles}>themux</div>
          <div style={statusLeftAfterStyles}>{statusLeftAfter}</div>
        </Selectable>
        <Selectable className="flex" terminalComponentName="windowStatus">
          <div style={windowStatusBeforeStyles}>{windowStatusBefore}</div>
          <div style={windowStatusStyles}>0:inactive-</div>
          <div style={windowStatusAfterStyles}>{windowStatusAfter}</div>
        </Selectable>
        <Selectable
          className="flex"
          terminalComponentName="windowStatusCurrent"
        >
          <div style={windowStatusCurrentBeforeStyles}>
            {windowStatusCurrentBefore}
          </div>
          <div style={windowStatusCurrentStyles}>1:active*</div>
          <div style={windowStatusCurrentAfterStyles}>
            {windowStatusCurrentAfter}
          </div>
        </Selectable>
        <Selectable className="flex" terminalComponentName="windowStatus">
          <div style={windowStatusBeforeStyles}>{windowStatusBefore}</div>
          <div style={windowStatusStyles}>2:inactive</div>
          <div style={windowStatusAfterStyles}>{windowStatusAfter}</div>
        </Selectable>
        <div className="grow"></div>
        <Selectable terminalComponentName="statusRight">
          <div className="flex">
            <div style={statusRightBeforeStyles}>{statusRightBefore}</div>
            <div style={statusRightStyles}>09 Aug 2022</div>
            <div style={statusRightAfterStyles}>{statusRightAfter}</div>
          </div>
        </Selectable>
      </div>
    </Selectable>
  );
}

export default observer(Status);
