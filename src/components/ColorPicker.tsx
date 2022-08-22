import { HexColorInput, HexColorPicker } from "react-colorful";

type PropsType = {
  color: string;
  onChange: (color: string) => void;
};

export default function ColorPicker(props: PropsType) {
  return (
    <>
      <HexColorPicker color={props.color} onChange={props.onChange} />
      <div className="text-right">
        <HexColorInput
          prefixed
          color={props.color}
          onChange={props.onChange}
          className="input uppercase"
        />
      </div>
    </>
  );
}
