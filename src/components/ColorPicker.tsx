import { HexColorInput, HexColorPicker } from "react-colorful";

type PropsType = {
  color: string;
  onChange: (color: string) => void;
};

export default function ColorPicker(props: PropsType) {
  return (
    <>
      <HexColorPicker color={props.color} onChange={props.onChange} />
      <HexColorInput
        color={props.color}
        onChange={props.onChange}
        className="border rounded-lg border-gray-500 mt-2 p-2 uppercase"
      />
    </>
  );
}
