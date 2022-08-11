import useStore from "../store";
import { useElementProperties } from "../hooks";
import ColorPicker from "./ColorPicker";
import type { IElementProperty } from "../types";

export default function PropertiesPanel() {
  const state = useStore();
  const elementProperties = useElementProperties(state.currentElement);

  if (elementProperties === undefined) {
    return <div>No properties for element {state.currentElement}</div>;
  }

  function handlePropertyChange(property: IElementProperty) {
    return (value: string) => {
      state.setPropertyValue(state.currentElement, property, value);
    };
  }

  return elementProperties.map((property, index) => {
    const { uiControl, value } = property;
    let UIControl: React.ReactNode;

    switch (uiControl) {
      case "ColorPicker":
        UIControl = (
          <ColorPicker
            color={value}
            onChange={handlePropertyChange(property)}
          />
        );
        break;
      default:
        UIControl = <div>Control {uiControl} is not supported.</div>;
    }

    return <div key={`${uiControl}-${index}`}>{UIControl}</div>;
  });
}
