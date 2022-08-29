import { observer } from "mobx-react-lite";

import ExtraText from "./ExtraText";
import { UIControls } from "../types";
import ColorPicker from "./ColorPicker";
import type { Property } from "../types";

type Props = {
  property: Property;
  onChange: (property: string, value: string) => void;
};

export default observer(function (props: Props) {
  let uiComponent;
  const { property } = props;

  function makeOnChangeHandler(propertyName: string) {
    return (value: string) => {
      props.onChange(propertyName, value);
    };
  }

  if (property.uiControl === UIControls.ColorPicker) {
    uiComponent = (
      <ColorPicker
        color={property.value}
        onChange={makeOnChangeHandler(property.name)}
      />
    );
  }

  return (
    <div>
      {property.display}

      {uiComponent || (
        <div>
          UI Control <strong>{property.uiControl}</strong> not supported.
        </div>
      )}
    </div>
  );
});
