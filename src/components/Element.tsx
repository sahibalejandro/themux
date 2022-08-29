import { observer } from "mobx-react-lite";

import Property from "./Property";
import type { Element } from "../types";

type PropsType = {
  element: Element;
  onPropertyChange: (
    elementName: string,
    propertyName: string,
    value: string
  ) => void;
};

export default observer(function (props: PropsType) {
  const { element } = props;

  function handlePropertyOnChange(propertyName: string, value: string) {
    props.onPropertyChange(element.name, propertyName, value);
  }

  return (
    <div className="mt-4 pt-4 border-t">
      <div className="pr-2">{element.display}</div>

      {element.properties.map((property) => (
        <div key={`${element.name}.${property.name}`}>
          <Property property={property} onChange={handlePropertyOnChange} />
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
    </div>
  );
});
