import { observer } from "mobx-react-lite";

import store from "../store";
import Selectable from "./Selectable";
import { keepWhitespaces } from "../utils";

function Status() {
  const statusStyles = store.getElementStyles("status", "general");
  const statusLeftStyles = store.getElementStyles("statusLeft", "general");
  const statusLeftBeforeStyles = store.getElementStyles("statusLeft", "prefix");
  const statusLeftAfterStyles = store.getElementStyles("statusLeft", "suffix");
  const statusRightStyles = store.getElementStyles("statusRight", "general");
  const statusRightBeforeStyles = store.getElementStyles(
    "statusRight",
    "prefix"
  );
  const statusRightAfterStyles = store.getElementStyles(
    "statusRight",
    "suffix"
  );
  const windowStatusStyles = store.getElementStyles("windowStatus", "general");
  const windowStatusCurrentStyles = store.getElementStyles(
    "windowStatusCurrent",
    "general"
  );
  const statusLeftBefore = keepWhitespaces(
    store.getPropertyValue("statusLeft", "prefix", "prefix")
  );
  const statusLeftAfter = keepWhitespaces(
    store.getPropertyValue("statusLeft", "suffix", "suffix")
  );
  const statusRightBefore = keepWhitespaces(
    store.getPropertyValue("statusRight", "prefix", "prefix")
  );
  const statusRightAfter = keepWhitespaces(
    store.getPropertyValue("statusRight", "suffix", "suffix")
  );
  const windowStatusBefore = keepWhitespaces(
    store.getPropertyValue("windowStatus", "prefix", "prefix")
  );
  const windowStatusAfter = keepWhitespaces(
    store.getPropertyValue("windowStatus", "suffix", "suffix")
  );
  const windowStatusBeforeStyles = store.getElementStyles(
    "windowStatus",
    "prefix"
  );
  const windowStatusAfterStyles = store.getElementStyles(
    "windowStatus",
    "suffix"
  );
  const windowStatusCurrentBefore = keepWhitespaces(
    store.getPropertyValue("windowStatusCurrent", "prefix", "prefix")
  );
  const windowStatusCurrentAfter = keepWhitespaces(
    store.getPropertyValue("windowStatusCurrent", "suffix", "suffix")
  );
  const windowStatusCurrentBeforeStyles = store.getElementStyles(
    "windowStatusCurrent",
    "prefix"
  );
  const windowStatusCurrentAfterStyles = store.getElementStyles(
    "windowStatusCurrent",
    "suffix"
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
