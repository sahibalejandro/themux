import { makeAutoObservable } from "mobx";

export enum UIControls {
  ColorPicker = "ColorPicker",
}

export interface Property {
  name: string;
  cssProp: string;
  tmuxProp: string;
  uiControl: UIControls;
  value: string;
}

interface Elements {
  status: Property[];
  statusLeft: Property[];
  statusRight: Property[];
  windowStatus: Property[];
  windowStatusCurrent: Property[];
}

export type ElementsNames = keyof Elements;

class Store {
  element: ElementsNames = "status";

  // prettier-ignore
  elements: Elements = {
    status: [
      { name: "font-color", cssProp: "color", tmuxProp: "fg", uiControl: UIControls.ColorPicker, value: "#ffffff" },
      { name: "background-color", cssProp: "backgroundColor", tmuxProp: "bg", uiControl: UIControls.ColorPicker, value: "#000000" },
    ],
    statusLeft: [
      { name: "font-color", cssProp: "color", tmuxProp: "fg", uiControl: UIControls.ColorPicker, value: "#000000" },
      { name: "background-color", cssProp: "backgroundColor", tmuxProp: "bg", uiControl: UIControls.ColorPicker, value: "#00ff00" },
    ],
    statusRight: [
      { name: "font-color", cssProp: "color", tmuxProp: "fg", uiControl: UIControls.ColorPicker, value: "#000000" },
      { name: "background-color", cssProp: "backgroundColor", tmuxProp: "bg", uiControl: UIControls.ColorPicker, value: "#ffcc00" },
    ],
    windowStatus: [
      { name: "font-color", cssProp: "color", tmuxProp: "fg", uiControl: UIControls.ColorPicker, value: "#efefef" },
      { name: "background-color", cssProp: "backgroundColor", tmuxProp: "bg", uiControl: UIControls.ColorPicker, value: "#555555" },
    ],
    windowStatusCurrent: [
      { name: "font-color", cssProp: "color", tmuxProp: "fg", uiControl: UIControls.ColorPicker, value: "#ffffff" },
      { name: "background-color", cssProp: "backgroundColor", tmuxProp: "bg", uiControl: UIControls.ColorPicker, value: "#0000ff" },
    ]
  };

  constructor() {
    makeAutoObservable(this);
  }

  get currentElementProps() {
    return this.elements[this.element];
  }

  setCurrentElement(element: ElementsNames) {
    this.element = element;
  }

  setElementPropValue(element: ElementsNames, name: string, value: string) {
    const prop = this.elements[element].find((prop) => prop.name === name);

    if (prop) {
      prop.value = value;
    }
  }

  getElementStyles(element: ElementsNames) {
    return this.elements[element].reduce((styles, property) => {
      if (!property.cssProp) {
        return styles;
      }

      return { ...styles, [property.cssProp]: property.value };
    }, {});
  }
}

export default new Store();
