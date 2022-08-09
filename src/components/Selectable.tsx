import useStore from "../store";
import type { IConfigs } from "../types";

type PropsType = {
  style?: any;
  className?: string;
  elementName: keyof IConfigs;
  children: React.ReactNode;
};

function Selectable(props: PropsType) {
  const state = useStore();

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    state.setCurrentElement(props.elementName);
  }

  return (
    <div
      style={props.style}
      onClick={handleClick}
      className={`cursor-pointer ${props.className}`}
    >
      {props.children}
    </div>
  );
}

Selectable.defaultProps = {
  style: {},
  className: "",
};

export default Selectable;
