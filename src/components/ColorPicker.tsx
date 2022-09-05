import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

type PropsType = {
  color: string;
  onChange: (color: string) => void;
};

export default function ColorPicker(props: PropsType) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  function toggleColorPicker() {
    setShowColorPicker(!showColorPicker);
  }

  return (
    <div>
      <div
        className="color-preview ml-auto"
        style={{ backgroundColor: props.color }}
        onClick={toggleColorPicker}
      ></div>
      {showColorPicker && (
        <div className="flex mt-4">
          <div>
            <HexColorPicker color={props.color} onChange={props.onChange} />
            <div className="text-center mt-2">
              <HexColorInput
                prefixed
                color={props.color}
                onChange={props.onChange}
                className="input uppercase text-center w-full"
              />
            </div>
          </div>
          <div
            className="mx-3 text-slate-500 cursor-pointer"
            onClick={toggleColorPicker}
          >
            &times;
          </div>
        </div>
      )}
    </div>
  );
}
