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
    <div className="flex mt-4 pt-4 border-t">
      <div>
        {property.display}
        <div>{property.description}</div>
      </div>
      <div className="ml-auto">
        {property.uiControl === UIControls.ColorPicker && (
          <ColorPicker color={property.value} onChange={props.onChange} />
        )}
      </div>
    </div>
  );
}
