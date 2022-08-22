import { observer } from "mobx-react-lite";

import ExtraText from "./ExtraText";
import { UIControls } from "../types";
import ColorPicker from "./ColorPicker";
import type { Property } from "../types";

type PropsType = {
  property: Property;
  onChange: (value: string) => void;
};

function ElementProperty(props: PropsType) {
  const { property } = props;

  return (
    <div className="flex mt-4 pt-4 border-t">
      <div className="pr-2">
        {property.display}
        <div className="text-slate-400 text-sm">{property.description}</div>
      </div>
      <div className="ml-auto">
        {property.uiControl === UIControls.ColorPicker && (
          <ColorPicker color={property.value} onChange={props.onChange} />
        )}
        {property.uiControl === UIControls.ExtraText && (
          <ExtraText text={property.value} onChange={props.onChange} />
        )}
      </div>
    </div>
  );
}

export default observer(ElementProperty);
