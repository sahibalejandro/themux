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
