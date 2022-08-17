import { observer } from "mobx-react-lite";

import store from "../store";
import ElementProperty from "./ElementProperty";

function PropertiesPanel() {
  function handlePropertyValueChange(name: string) {
    return (value: string) => {
      store.setElementPropValue(store.element, name, value);
    };
  }

  return (
    <div>
      {store.currentElement.display}
      {store.currentElementProps.map((property, idx) => (
        <ElementProperty
          key={`element-${idx}`}
          property={property}
          onChange={handlePropertyValueChange(property.name)}
        />
      ))}
    </div>
  );
}

export default observer(PropertiesPanel);
