import { makeAutoObservable } from "mobx";

import elements from "./elements";
import type { ElementsNames } from "./types";

class Store {
  element: ElementsNames = "status";

  elements = elements;

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
      this.elements[element] = [...this.elements[element]];
    }
  }

  getElementStyles(element: ElementsNames): any {
    return this.elements[element].reduce((styles, property) => {
      if (!property.cssProp) {
        return styles;
      }

      return { ...styles, [property.cssProp]: property.value };
    }, {});
  }
}

export default new Store();
