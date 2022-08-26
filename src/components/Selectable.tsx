import store from "../store";
import type { TerminalComponentName } from "../types";

type PropsType = {
  style?: any;
  className?: string;
  children: React.ReactNode;
  terminalComponentName: TerminalComponentName;
};

function Selectable(props: PropsType) {
  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    store.setCurrentTerminalComponent(props.terminalComponentName);
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
