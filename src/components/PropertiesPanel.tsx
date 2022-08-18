import { observer } from "mobx-react-lite";

import store from "../store";
import ElementProperty from "./ElementProperty";

function PropertiesPanel() {
  function makePropertyChangeHandler(propertyName: string) {
    return (value: string) => {
      store.setElementPropertyValue(store.element, propertyName, value);
    };
  }

  return (
    <div>
      {store.getCurrentElement().display}
      {store.getCurrentElementProperties().map((property, idx) => (
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
