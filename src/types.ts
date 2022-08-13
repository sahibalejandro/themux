export enum UIControls {
  ColorPicker = "ColorPicker",
}

export interface Property {
  name: string;
  display: string;
  cssProp: string;
  tmuxProp: string;
  uiControl: UIControls;
  value: string;
}

export interface Elements {
  status: Property[];
  statusLeft: Property[];
  statusRight: Property[];
  windowStatus: Property[];
  windowStatusCurrent: Property[];
  pane: Property[];
  paneActive: Property[];
  clock: Property[];
  mode: Property[];
}

export type ElementsNames = keyof Elements;

/*
 * Deprecated types
 */
export interface IElementProperty {
  cssProperty: string;
  tmuxProperty: string;
  uiControl: string;
  value: string;
}

export interface IElementsProperties {
  [key: string]: IElementProperty[] | undefined;
}

export interface IStore {
  currentElement: string;
  elementsProperties: IElementsProperties;

  setCurrentElement: (elementName: string) => void;
  setPropertyValue: (
    elementName: string,
    property: IElementProperty,
    value: string
  ) => void;
}
