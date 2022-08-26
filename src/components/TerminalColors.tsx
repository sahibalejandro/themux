import store from "../store";

export default function TerminalColors() {
  function handleClick() {
    store.setCurrentTerminalComponent("terminal");
  }

  return (
    <button className="button" type="button" onClick={handleClick}>
      Change Terminal Colors
    </button>
  );
}
