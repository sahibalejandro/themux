import { action, makeObservable, observable } from "mobx";

import elements from "./elements";
import type { ElementName } from "./types";

class Store {
  element: ElementName = "status";

  elements = elements;

  constructor() {
    makeObservable(this, {
      element: observable,
      elements: observable,
      setCurrentElement: action,
      setElementPropertyValue: action,
    });
  }

  getCurrentElement() {
    return this.elements[this.element];
  }

  getCurrentElementProperties() {
    return this.elements[this.element].properties;
  }

  setCurrentElement(element: ElementName) {
    this.element = element;
  }

  setElementPropertyValue(element: ElementName, name: string, value: string) {
    const propertyIndex = this.elements[element].properties.findIndex(
      (property) => property.name === name
    );

    if (propertyIndex >= 0) {
      const property = this.elements[element].properties[propertyIndex];
      this.elements[element].properties[propertyIndex] = { ...property, value };
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
