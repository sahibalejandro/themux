import { useCallback } from "react";
import { observer } from "mobx-react-lite";

import store from "../store";
import ElementProperty from "./ElementProperty";

function PropertiesPanel() {
  const handlePropertyValueChange = useCallback(
    (name: string, value: string) => {
      store.setElementPropertyValue(store.element, name, value);
    },
    []
  );

  return (
    <div>
      {store.getCurrentElement().display}
      {store.getCurrentElementProperties().map((property, idx) => (
        <ElementProperty
          key={`element-${idx}`}
          property={property}
          onChange={handlePropertyValueChange}
        />
      ))}
    </div>
  );
}

export default observer(PropertiesPanel);
