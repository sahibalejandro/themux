import { observer } from "mobx-react-lite";

import store from "../store";

function TerminalColors() {
  function handleClick() {
    store.setCurrentElement("terminal");
  }

  return (
    <button className="button" type="button" onClick={handleClick}>
      Change Terminal Colors
    </button>
  );
}

export default observer(TerminalColors);
