import { observer } from "mobx-react-lite";

import store from "../store";
import Element from "./Element";

function ElementsPanel() {
  /**
   * The function returned is passed down to the property component
   * where is called to update the property value.
   */
  function makePropertyOnChangeHandler(elementName: string) {
    return (propertyName: string, value: string) => {
      store.setPropertyValue(
        store.currentTerminalComponentName,
        elementName,
        propertyName,
        value
      );
    };
  }

  return (
    <div>
      <div className="bg-slate-200 border-b border-slate-300 px-4 py-2 text-xl">
        {store.getCurrentTerminalComponent().display}
      </div>
      {store.getCurrentTerminalComponentElements().map((element, idx) => (
        <Element
          key={`element-${idx}`}
          element={element}
          onPropertyChange={makePropertyOnChangeHandler(element.name)}
        />
      ))}
    </div>
  );
}

export default observer(ElementsPanel);