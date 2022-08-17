export enum UIControls {
  ColorPicker = "ColorPicker",
}

export interface Element {
  display: string;
  properties: Property[];
}

export interface Property {
  name: string;
  display: string;
  description?: string;
  cssProp: string;
  tmuxProp: string;
  uiControl: UIControls;
  value: string;
}

export interface Elements {
  terminal: Element;
  status: Element;
  statusLeft: Element;
  statusRight: Element;
  windowStatus: Element;
  windowStatusCurrent: Element;
  pane: Element;
  paneActive: Element;
  clock: Element;
  mode: Element;
}

export type ElementName = keyof Elements;
