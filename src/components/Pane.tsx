import { observer } from "mobx-react-lite";

import store from "../store";
import type { ElementsNames } from "../types";

type PropsType = {
  className?: string;
  element: ElementsNames;
  children?: React.ReactNode;
};

function Pane(props: PropsType) {
  const style = store.getElementStyles(props.element);

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
