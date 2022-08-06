import { useId } from "react";

type CheckboxPropsType = {
  value: string;
  checked: boolean;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Checkbox(props: CheckboxPropsType) {
  const id = useId();

  return (
    <label className="cursor-pointer" htmlFor={id}>
      <input
        id={id}
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />{" "}
      {props.children}
    </label>
  );
}
