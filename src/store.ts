import { action, makeObservable, observable } from "mobx";

import type { TerminalComponentName } from "./types";
import terminalComponents from "./terminalComponents";

class Store {
  currentTerminalComponentName: TerminalComponentName = "status";

  terminalComponents = terminalComponents;

  constructor() {
    makeObservable(this, {
      setPropertyValue: action,
      terminalComponents: observable,
      setCurrentTerminalComponent: action,
      currentTerminalComponentName: observable, // TODO: Check if this needs to be observable, probably not.
    });
  }

  getCurrentTerminalComponent() {
    return this.terminalComponents[this.currentTerminalComponentName];
  }

  getCurrentTerminalComponentElements() {
    return this.terminalComponents[this.currentTerminalComponentName].elements;
  }

  setCurrentTerminalComponent(terminalComponentName: TerminalComponentName) {
    this.currentTerminalComponentName = terminalComponentName;
  }

  setPropertyValue(
    terminalComponentName: TerminalComponentName,
    elementName: string,
    propertyName: string,
    value: string
  ) {
    const element = this.terminalComponents[
      terminalComponentName
    ].elements.find((element) => element.name === elementName);

    if (element === undefined) {
      console.warn(
        `setPropertyValue: Element ${elementName} not found in terminal component ${terminalComponentName}`
      );
      return;
    }

    const property = element.properties.find(
      (property) => property.name === propertyName
    );

    if (property === undefined) {
      console.warn(
        `setPropertyValue: Property ${propertyName} not found in element ${terminalComponentName}.${elementName}`
      );
    }

    property && (property.value = value);
  }

  getElementStyles(
    terminalComponentName: TerminalComponentName,
    elementName: string
  ): any {
    const element = this.terminalComponents[
      terminalComponentName
    ].elements.find((element) => element.name === elementName);

    if (element === undefined) {
      console.warn(
        `getElementStyles: Element ${elementName} not found in ${terminalComponentName}`
      );
      return;
    }

    return element.properties.reduce((styles, property) => {
      if (!property.cssProp) {
        return styles;
      }

      return { ...styles, [property.cssProp]: property.value };
    }, {});
  }

  getPropertyValue(
    terminalComponentName: TerminalComponentName,
    elementName: string,
    propertyName: string
  ): string {
    const element = this.terminalComponents[
      terminalComponentName
    ].elements.find((element) => element.name === elementName);

    if (element === undefined) {
      console.warn(
        `getPropertyValue: Element ${elementName} not found in ${terminalComponentName}`
      );

      return "";
    }

    const property = element.properties.find((property) => {
      return property.name === propertyName;
    });

    return property?.value || "";
  }
}

export default new Store();
