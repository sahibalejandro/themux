import { IElementsProperties } from "./types";

// prettier-ignore
const elementsProperties: IElementsProperties = {
  status: [
    { cssProperty: "backgroundColor", tmuxProperty: "bg", uiControl: "ColorPicker", value: "#000000" },
  ],
  statusLeft: [
    { cssProperty: "color", tmuxProperty: "fg", uiControl: "ColorPicker", value: "#ffffff" },
    { cssProperty: "backgroundColor", tmuxProperty: "bg", uiControl: "ColorPicker", value: "#00ff00" },
  ],
  windowStatus: [
    { cssProperty: "color", tmuxProperty: "fg", uiControl: "ColorPicker", value: "#ffffff" },
    { cssProperty: "backgroundColor", tmuxProperty: "bg", uiControl: "ColorPicker", value: "#000000" },
  ],
  windowStatusCurrent: [
    { cssProperty: "color", tmuxProperty: "fg", uiControl: "ColorPicker", value: "#ffffff" },
    { cssProperty: "backgroundColor", tmuxProperty: "bg", uiControl: "ColorPicker", value: "#ffcc00" },
  ],
  statusRight: [
    { cssProperty: "color", tmuxProperty: "fg", uiControl: "ColorPicker", value: "#ffffff" },
    { cssProperty: "backgroundColor", tmuxProperty: "bg", uiControl: "ColorPicker", value: "#0000ff" },
  ],
};

export default elementsProperties;
