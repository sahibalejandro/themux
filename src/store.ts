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

  setElementPropertyValue(
    elementName: ElementName,
    propertyName: string,
    value: string
  ) {
    const property = this.elements[elementName].properties.find(
      (property) => property.name === propertyName
    );

    property && (property.value = value);
  }

  getElementStyles(element: ElementName): any {
    return this.elements[element].properties.reduce((styles, property) => {
      if (!property.cssProp) {
        return styles;
      }

      return { ...styles, [property.cssProp]: property.value };
    }, {});
  }

  getElementPropertyValue(element: ElementName, propertyName: string) {
    const property = this.elements[element].properties.find(
      (property) => property.name === propertyName
    );

    return property?.value || "";
  }
}

export default new Store();
