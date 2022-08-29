import { observer } from "mobx-react-lite";

import store from "../store";
import Element from "./Element";

function ElementsPanel() {
  function handlePropertyChange(
    elementName: string,
    propertyName: string,
    value: string
  ) {
    store.setPropertyValue(
      store.currentTerminalComponentName,
      elementName,
      propertyName,
      value
    );
  }

  return (
    <div>
      {store.getCurrentTerminalComponent().display}
      {store.getCurrentTerminalComponentElements().map((element, idx) => (
        <Element
          key={`element-${idx}`}
          element={element}
          onPropertyChange={handlePropertyChange}
        />
      ))}
    </div>
  );
}

export default observer(ElementsPanel);
