import type { Property } from "../types";
import ColorPicker from "./ColorPicker";
import { UIControls } from "../types";

type PropsType = {
  property: Property;
  onChange: (value: string) => void;
};

export default function (props: PropsType) {
  const { property } = props;

  return (
    <div>
      <div>{property.display}</div>
      {property.uiControl === UIControls.ColorPicker && (
        <ColorPicker color={property.value} onChange={props.onChange} />
      )}
    </div>
  );
}
