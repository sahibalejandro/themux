import { observer } from "mobx-react-lite";

import Property from "./Property";
import type { Element } from "../types";

type PropsType = {
  element: Element;
  onPropertyChange: (propertyName: string, value: string) => void;
};

export default observer(function (props: PropsType) {
  const { element } = props;

  return (
    <>
      <div className="px-4 py-2 font-bold">{element.display}</div>

      {element.properties.map((property) => (
        <div key={`${element.name}.${property.name}`}>
          <Property property={property} onChange={props.onPropertyChange} />
        </div>
      ))}

      {/*
      <div className="ml-auto">
        {element.uiControl === UIControls.ColorPicker && (
          <ColorPicker color={element.value} onChange={props.onChange} />
        )}
        {element.uiControl === UIControls.ExtraText && (
          <ExtraText text={element.value} onChange={props.onChange} />
        )}
      </div>
      */}
    </>
  );
});
