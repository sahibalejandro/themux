import { observer } from "mobx-react-lite";

import ExtraText from "./ExtraText";
import { UIControls } from "../types";
import ColorPicker from "./ColorPicker";
import type { Property } from "../types";

type Props = {
  property: Property;
  onChange: (propertyName: string, value: string) => void;
};

export default observer(function (props: Props) {
  let uiComponent;
  const { property } = props;

  function handleOnChange(value: string) {
    props.onChange(property.name, value);
  }

  if (property.uiControl === UIControls.ColorPicker) {
    uiComponent = (
      <ColorPicker color={property.value} onChange={handleOnChange} />
    );
  }

  if (property.uiControl === UIControls.ExtraText) {
    uiComponent = (
      <ExtraText text={property.value} onChange={handleOnChange}></ExtraText>
    );
  }

  return (
    <div className="flex border-t py-2 px-4">
      <div>{property.display}</div>
      {uiComponent && <div className="ml-auto">{uiComponent}</div>}
      {uiComponent === undefined && (
        <div>
          UI Control <strong>{property.uiControl}</strong> not supported.
        </div>
      )}
    </div>
  );
});
