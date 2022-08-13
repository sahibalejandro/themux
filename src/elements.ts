import { UIControls } from "./types";
import type { Elements, Property } from "./types";

function backgroundColor(overrides: Partial<Property>): Property {
  return {
    name: "background-color",
    display: "Background Color",
    cssProp: "backgroundColor",
    tmuxProp: "bg",
    uiControl: UIControls.ColorPicker,
    value: "#ffffff",
    ...overrides,
  };
}

function fontColor(overrides: Partial<Property>): Property {
  return {
    name: "font-color",
    display: "Font Color",
    cssProp: "color",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    value: "#191726",
    ...overrides,
  };
}

function borderColor(overrides: Partial<Property>): Property {
  return {
    name: "border-color",
    display: "Border Color",
    cssProp: "border-color",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    value: "#191726",
    ...overrides,
  };
}

const elements: Elements = {
  status: [backgroundColor({ value: "#000000" })],

  statusLeft: [
    fontColor({ value: "#000000" }),
    backgroundColor({ value: "#00ff00" }),
  ],

  statusRight: [
    fontColor({ value: "#000000" }),
    backgroundColor({ value: "#ffcc00" }),
  ],

  windowStatus: [
    fontColor({ value: "#efefef" }),
    backgroundColor({ value: "#555555" }),
  ],

  windowStatusCurrent: [
    fontColor({ value: "#ffffff" }),
    backgroundColor({ value: "#0000ff" }),
  ],

  pane: [borderColor({ value: "#191726" })],

  paneActive: [borderColor({ value: "#73A132" })],

  clock: [backgroundColor({ display: "Font Color", value: "#ff0000" })],

  mode: [
    fontColor({ value: "#ffffff" }),
    backgroundColor({ value: "#73A132" }),
  ],
};

export default elements;
