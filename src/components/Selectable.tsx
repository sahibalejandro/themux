import store from "../store";
import type { ElementsNames } from "../store";

type PropsType = {
  style?: any;
  className?: string;
  element: ElementsNames;
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
