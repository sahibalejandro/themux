import store from "../store";
import type { ElementName } from "../types";

type PropsType = {
  style?: any;
  className?: string;
  element: ElementName;
  children: React.ReactNode;
};

function Selectable(props: PropsType) {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    store.setCurrentElement(props.element);
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
