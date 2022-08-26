import { UIControls } from "./types";
import type { TerminalComponents, Property } from "./types";

type PropertyOverrides = Partial<Property> & Required<Pick<Property, "value">>;

function color(overrides: PropertyOverrides): Property {
  return {
    name: "color",
    display: "Color",
    cssProp: "color",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    ...overrides,
  };
}

function backgroundColor(overrides: PropertyOverrides) {
  return color({
    name: "background-color",
    display: "Background",
    cssProp: "backgroundColor",
    tmuxProp: "bg",
    ...overrides,
  });
}

function borderColor(overrides: PropertyOverrides) {
  return color({
    name: "border-color",
    cssProp: "borderColor",
    ...overrides,
  });
}

function extraText(overrides: Partial<Property> = {}) {
  return {
    name: "extra-text",
    display: "Extra Text",
    uiControl: UIControls.ExtraText,
    value: " ",
    ...overrides,
  };
}

const terminalComponents: TerminalComponents = {
  terminal: {
    display: "Terminal",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#000000" }),
        ],
      },
    ],
  },

  status: {
    display: "Status Bar",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#000000" }),
        ],
      },
    ],
  },

  statusLeft: {
    display: "Status Left",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
      {
        name: "text-before",
        display: "Text Before",
        properties: [
          extraText({ name: "prefix", display: "Text Before", value: " " }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
      {
        name: "text-after",
        display: "Text After",
        properties: [
          extraText({ name: "suffix", display: "Text After", value: " " }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
    ],
  },

  statusRight: {
    display: "Status Right",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
      {
        name: "text-before",
        display: "Text Before",
        properties: [
          extraText({ name: "prefix", display: "Text Before", value: " " }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
      {
        name: "text-after",
        display: "Text After",
        properties: [
          extraText({ name: "suffix", display: "Text After", value: " " }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
    ],
  },

  windowStatus: {
    display: "Window Status",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#000000" }),
        ],
      },
    ],
  },

  windowStatusCurrent: {
    display: "Window Status Current",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
    ],
  },

  pane: {
    display: "Pane",
    elements: [
      {
        name: "base",
        display: "Base Style",
        properties: [borderColor({ value: "#888888" })],
      },
    ],
  },

  paneActive: {
    display: "Pane Active",
    elements: [
      {
        name: "base",
        display: "Base Style",
        properties: [borderColor({ value: "#73A132" })],
      },
    ],
  },

  clock: {
    display: "Clock",
    elements: [
      {
        name: "text",
        display: "Text",
        properties: [backgroundColor({ value: "#ff5533" })],
      },
    ],
  },

  mode: {
    display: "Mode",
    elements: [
      {
        name: "base",
        display: "Base Style",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
    ],
  },
};

export default terminalComponents;
