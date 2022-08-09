import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import useStore from "../store";
import { useStyleValue } from "../hooks";
import RadioButton from "./RadioButton";

export default function ColorPicker() {
  const state = useStore();
  const [property, setProperty] = useState("fg");
  const [noBackground, setNoBackground] = useState(false);
  const color = useStyleValue(state.currentElement, property);

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProperty(e.target.value);
  }

  function handleNoBackgroundChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setProperty("fg");
      state.setStyleValue("bg", "");
    }

    setNoBackground(e.target.checked);
  }

  function handleColorChange(color: string) {
    state.setStyleValue(property, color);
  }

  return (
    <>
      <div>
        <RadioButton
          value="fg"
          checked={property === "fg"}
          onChange={handleCheckboxChange}
        >
          Font Color
        </RadioButton>
      </div>
      <div>
        <RadioButton
          value="bg"
          disabled={noBackground}
          checked={property === "bg"}
          onChange={handleCheckboxChange}
        >
          Background Color
        </RadioButton>
      </div>
      <div>
        <RadioButton
          checkbox
          checked={noBackground}
          onChange={handleNoBackgroundChange}
        >
          No Background
        </RadioButton>
      </div>
      <HexColorPicker color={color} onChange={handleColorChange} />
      <HexColorInput
        color={color}
        onChange={handleColorChange}
        className="border rounded-lg border-gray-500 mt-2 p-2 uppercase"
      />
    </>
  );
}
