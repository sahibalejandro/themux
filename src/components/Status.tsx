import Selectable from "./Selectable";
import { useElementConfig } from "../hooks";
import type { IConfig } from "../types";

function getStyles(config: IConfig) {
  return {
    color: config.color,
    backgroundColor: config.backgroundColor,
  };
}

export default function Status() {
  const statusStyles = getStyles(useElementConfig("status"));
  const statusLeftStyles = getStyles(useElementConfig("statusLeft"));
  const statusRightStyles = getStyles(useElementConfig("statusRight"));
  const windowStatusStyles = getStyles(useElementConfig("windowStatus"));
  const windowStatusCurrentStyles = getStyles(
    useElementConfig("windowStatusCurrent")
  );

  return (
    <Selectable elementName="status" style={statusStyles}>
      <div className="flex">
        <Selectable elementName="statusLeft" style={statusLeftStyles}>
          <div>[themux]</div>
        </Selectable>
        <Selectable elementName="windowStatus" style={windowStatusStyles}>
          <div>0:inactive-</div>
        </Selectable>
        <Selectable
          elementName="windowStatusCurrent"
          style={windowStatusCurrentStyles}
        >
          <div>1:active*</div>
        </Selectable>
        <Selectable elementName="windowStatus" style={windowStatusStyles}>
          <div>2:inactive</div>
        </Selectable>
        <div className="grow"></div>
        <Selectable elementName="statusRight" style={statusRightStyles}>
          <div>09 Aug 2022</div>
        </Selectable>
      </div>
    </Selectable>
  );
}
