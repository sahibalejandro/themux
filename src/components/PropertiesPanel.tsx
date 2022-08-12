import { observer } from "mobx-react-lite";

import ColorPicker from "./ColorPicker";
import store, { UIControls } from "../store";

function PropertiesPanel() {
  function handleValueChange(propName: string) {
    return (value: string) => {
      store.setElementPropValue(store.element, propName, value);
    };
  }

  return (
    <div>
      {store.currentElementProps.map((prop, idx) => {
        switch (prop.uiControl) {
          case UIControls.ColorPicker:
            return (
              <ColorPicker
                key={`ColorPicker-${idx}`}
                color={prop.value}
                onChange={handleValueChange(prop.name)}
              />
            );
        }
      })}
    </div>
  );
}

export default observer(PropertiesPanel);
