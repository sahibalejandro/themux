import { useId } from "react";

type PropsType = {
  value?: string;
  checked: boolean;
  checkbox?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RadioButton(props: PropsType) {
  const id = useId();
  const type = props.checkbox === true ? "checkbox" : "radio";

  return (
    <label className="cursor-pointer" htmlFor={id}>
      <input
        id={id}
        type={type}
        value={props.value || ""}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />{" "}
      {props.children}
    </label>
  );
}

RadioButton.defaultProps = {
  value: "",
  disabled: false,
  checkbox: false,
};

export default RadioButton;
