import { observer } from "mobx-react-lite";

import store from "../store";
import Selectable from "./Selectable";

function SessionsList() {
  const styles = store.getElementStyles("mode", "base");

  return (
    <Selectable terminalComponentName="mode">
      <div style={{ color: styles.color }}>
        <div>(0) + laravel: 2 windows</div>
        <div style={{ backgroundColor: styles.backgroundColor }}>
          (1) + themux: 3 windows (attached)
        </div>
        <div>(2) + typescript: 1 windows</div>
      </div>
    </Selectable>
  );
}

export default observer(SessionsList);
