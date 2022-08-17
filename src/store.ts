import { makeAutoObservable } from "mobx";

import elements from "./elements";
import type { ElementName } from "./types";

class Store {
  element: ElementName = "status";

  elements = elements;

  constructor() {
    makeAutoObservable(this);
  }

  get currentElement() {
    return this.elements[this.element];
  }

  get currentElementProps() {
    return this.elements[this.element].properties;
  }

  setCurrentElement(element: ElementName) {
    this.element = element;
  }

  setElementPropValue(element: ElementName, name: string, value: string) {
    const prop = this.elements[element].properties.find(
      (prop) => prop.name === name
    );

    if (prop) {
      prop.value = value;
      this.elements[element].properties = [
        ...this.elements[element].properties,
      ];
    }
  }

  getElementStyles(element: ElementName): any {
    return this.elements[element].properties.reduce((styles, property) => {
      if (!property.cssProp) {
        return styles;
      }

      return { ...styles, [property.cssProp]: property.value };
    }, {});
  }
}

export default new Store();
