import { observer } from "mobx-react-lite";

import store from "../store";
import type { TerminalComponentName } from "../types";

type PropsType = {
  className?: string;
  children?: React.ReactNode;
  terminalComponentName: TerminalComponentName;
};

function Pane(props: PropsType) {
  const style = store.getElementStyles(props.terminalComponentName, "general");

  return (
    <div className={`h-96 p-2 ${props.className}`} style={style}>
      {props.children}
    </div>
  );
}

Pane.defaultProps = {
  className: "",
};

export default observer(Pane);
