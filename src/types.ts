export enum UIControls {
  ColorPicker = "ColorPicker",
  ExtraText = "ExtraText",
}

export interface TerminalComponent {
  display: string;
  elements: Element[];
}

export interface Element {
  name: string;
  display: string;
  properties: Property[];
}

export interface Property {
  name: string;
  display: string;
  description?: string;
  cssProp?: string;
  tmuxProp?: string;
  uiControl: UIControls;
  value: string;
}

export interface TerminalComponents {
  terminal: TerminalComponent;
  status: TerminalComponent;
  statusLeft: TerminalComponent;
  statusRight: TerminalComponent;
  windowStatus: TerminalComponent;
  windowStatusCurrent: TerminalComponent;
  pane: TerminalComponent;
  paneActive: TerminalComponent;
  clock: TerminalComponent;
  mode: TerminalComponent;
}

export type TerminalComponentName = keyof TerminalComponents;
