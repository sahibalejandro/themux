import { observer } from "mobx-react-lite";

import store from "../store";
import ElementProperty from "./ElementProperty";

function PropertiesPanel() {
  function makePropertyChangeHandler(propertyName: string) {
    return (value: string) => {
      store.setPropertyValue(
        store.currentTerminalComponentName,
        propertyName,
        value
      );
    };
  }

  return (
    <div>
      {store.getCurrentTerminalComponent().display}
      {store.getCurrentTerminalComponentElements().map((property, idx) => (
        <ElementProperty
          key={`element-${idx}`}
          property={property}
          onChange={makePropertyChangeHandler(property.name)}
        />
      ))}
    </div>
  );
}

export default observer(PropertiesPanel);
