import { UIControls } from "./types";
import type { Elements, Property } from "./types";

function backgroundColor(overrides: Partial<Property> = {}): Property {
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

function fontColor(overrides: Partial<Property> = {}): Property {
  return {
    name: "font-color",
    display: "Font Color",
    cssProp: "color",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    value: "#000000",
    ...overrides,
  };
}

function borderColor(overrides: Partial<Property> = {}): Property {
  return {
    name: "border-color",
    display: "Border Color",
    cssProp: "borderColor",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    value: "#000000",
    ...overrides,
  };
}

const elements: Elements = {
  terminal: {
    display: "Terminal",
    properties: [
      fontColor({ value: "#ffffff" }),
      backgroundColor({ value: "#000000" }),
    ],
  },

  status: {
    display: "Status Bar",
    properties: [backgroundColor({ value: "#000000" })],
  },

  statusLeft: {
    display: "Status Left",
    properties: [
      fontColor({ value: "#000000" }),
      backgroundColor({ value: "#00ff00" }),
    ],
  },

  statusRight: {
    display: "Status Right",
    properties: [
      fontColor({ value: "#000000" }),
      backgroundColor({ value: "#ffcc00" }),
    ],
  },

  windowStatus: {
    display: "Window Status",
    properties: [
      fontColor({ value: "#efefef" }),
      backgroundColor({ value: "#555555" }),
    ],
  },

  windowStatusCurrent: {
    display: "Window Status Current",
    properties: [
      fontColor({ value: "#ffffff" }),
      backgroundColor({ value: "#0000ff" }),
    ],
  },

  pane: { display: "Pane", properties: [borderColor({ value: "#ffffff" })] },

  paneActive: {
    display: "Pane Active",
    properties: [borderColor({ value: "#73A132" })],
  },

  clock: {
    display: "Clock",
    properties: [backgroundColor({ display: "Font Color", value: "#ff0000" })],
  },

  mode: {
    display: "Mode",
    properties: [
      fontColor({ value: "#ffffff" }),
      backgroundColor({
        description: "Background color for selected session",
        value: "#73A132",
      }),
    ],
  },
};

export default elements;
