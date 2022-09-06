import { UIControls } from "./types";
import type { TerminalComponents, Property } from "./types";

type PropertyOverrides = Partial<Property> & Required<Pick<Property, "value">>;

function color(overrides: PropertyOverrides): Property {
  return {
    name: "color",
    display: "Text Color",
    cssProp: "color",
    tmuxProp: "fg",
    uiControl: UIControls.ColorPicker,
    ...overrides,
  };
}

function backgroundColor(overrides: PropertyOverrides) {
  return color({
    name: "background-color",
    display: "Background Color",
    cssProp: "backgroundColor",
    tmuxProp: "bg",
    ...overrides,
  });
}

function borderColor(overrides: PropertyOverrides) {
  return color({
    name: "border-color",
    display: "Border Color",
    cssProp: "borderColor",
    ...overrides,
  });
}

function extraText(overrides: Partial<Property> = {}) {
  return {
    name: "extra-text",
    display: "Text",
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
        name: "general",
        display: "General",
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
        name: "general",
        display: "General",
        properties: [backgroundColor({ value: "#000000" })],
      },
    ],
  },

  statusLeft: {
    display: "Status Left",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
      {
        name: "prefix",
        display: "Prefix",
        properties: [
          extraText({ name: "prefix" }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
      {
        name: "suffix",
        display: "Suffix",
        properties: [
          extraText({ name: "suffix" }),
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
        name: "general",
        display: "General",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
      {
        name: "prefix",
        display: "Prefix",
        properties: [
          extraText({ name: "prefix" }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
      {
        name: "suffix",
        display: "Suffix",
        properties: [
          extraText({ name: "suffix" }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
    ],
  },

  windowStatus: {
    display: "Window Status",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#000000" }),
        ],
      },
      {
        name: "prefix",
        display: "Prefix",
        properties: [
          extraText({ name: "prefix" }),
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#000000" }),
        ],
      },
      {
        name: "suffix",
        display: "Suffix",
        properties: [
          extraText({ name: "suffix" }),
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
        name: "general",
        display: "General",
        properties: [
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
      {
        name: "prefix",
        display: "Prefix",
        properties: [
          extraText({ name: "prefix" }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
      {
        name: "suffix",
        display: "Suffix",
        properties: [
          extraText({ name: "suffix" }),
          color({ value: "#000000" }),
          backgroundColor({ value: "#ffcc00" }),
        ],
      },
    ],
  },

  pane: {
    display: "Pane (Inactive)",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [borderColor({ value: "#888888" })],
      },
    ],
  },

  paneActive: {
    display: "Pane (Active)",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [borderColor({ value: "#73A132" })],
      },
    ],
  },

  clock: {
    display: "Clock",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [
          backgroundColor({ display: "Text Color", value: "#ff5533" }),
        ],
      },
    ],
  },

  mode: {
    display: "Sessions List",
    elements: [
      {
        name: "general",
        display: "General",
        properties: [
          color({ value: "#ffffff" }),
          backgroundColor({ value: "#73A132" }),
        ],
      },
    ],
  },
};

export default terminalComponents;
