import { observer } from "mobx-react-lite";

import store from "../store";
import Selectable from "./Selectable";

function Status() {
  const statusStyles = store.getElementStyles("status");
  const statusLeftStyles = store.getElementStyles("statusLeft");
  const statusRightStyles = store.getElementStyles("statusRight");
  const windowStatusStyles = store.getElementStyles("windowStatus");
  const windowStatusCurrentStyles = store.getElementStyles(
    "windowStatusCurrent"
  );

  return (
    <Selectable element="status" style={statusStyles}>
      <div className="flex">
        <Selectable element="statusLeft" style={statusLeftStyles}>
          <div>[themux]</div>
        </Selectable>
        <Selectable element="windowStatus" style={windowStatusStyles}>
          <div>0:inactive-</div>
        </Selectable>
        <Selectable
          element="windowStatusCurrent"
          style={windowStatusCurrentStyles}
        >
          <div>1:active*</div>
        </Selectable>
        <Selectable element="windowStatus" style={windowStatusStyles}>
          <div>2:inactive</div>
        </Selectable>
        <div className="grow"></div>
        <Selectable element="statusRight" style={statusRightStyles}>
          <div>09 Aug 2022</div>
        </Selectable>
      </div>
    </Selectable>
  );
}

export default observer(Status);
