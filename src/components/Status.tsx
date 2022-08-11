import Selectable from "./Selectable";
import { useElementProperties } from "../hooks";
import type { IElementProperty } from "../types";

function getStyles(elementProperties: IElementProperty[]) {
  return elementProperties.reduce((styles, elementProperty) => {
    const { cssProperty, value } = elementProperty;

    if (cssProperty !== undefined) {
      styles = { ...styles, [cssProperty]: value };
    }

    return styles;
  }, {});
}

export default function Status() {
  const statusStyles = getStyles(useElementProperties("status"));
  const statusLeftStyles = getStyles(useElementProperties("statusLeft"));
  const statusRightStyles = getStyles(useElementProperties("statusRight"));
  const windowStatusStyles = getStyles(useElementProperties("windowStatus"));
  const windowStatusCurrentStyles = getStyles(
    useElementProperties("windowStatusCurrent")
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
