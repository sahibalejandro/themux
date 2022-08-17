import React from "react";

import type { Property } from "../types";
import ColorPicker from "./ColorPicker";
import { UIControls } from "../types";

type PropsType = {
  property: Property;
  onChange: (propertyName: string, value: string) => void;
};

function ElementProperty(props: PropsType) {
  const { property } = props;

  function handleChange(propertyName: string) {
    return (value: string) => {
      props.onChange(propertyName, value);
    };
  }

  return (
    <div className="flex mt-4 pt-4 border-t">
      <div>
        {property.display}
        <div>{property.description}</div>
      </div>
      <div className="ml-auto">
        {property.uiControl === UIControls.ColorPicker && (
          <ColorPicker
            color={property.value}
            onChange={handleChange(property.name)}
          />
        )}
      </div>
    </div>
  );
}

export default React.memo(ElementProperty);
