import { useState } from "react";

import Checkbox from "./Checkbox";

export default function ColorsPicker() {
  const [property, setProperty] = useState("fg");

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProperty(e.target.value);
  }

  return (
    <div>
      <Checkbox
        value="fg"
        checked={property === "fg"}
        onChange={handleCheckboxChange}
      >
        Font Color
      </Checkbox>

      <Checkbox
        value="bg"
        checked={property === "bg"}
        onChange={handleCheckboxChange}
      >
        Background Color
      </Checkbox>
    </div>
  );
}
