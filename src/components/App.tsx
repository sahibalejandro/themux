import useStore from "../store";
import TmuxBar from "./TmuxBar";
import TmuxConfig from "./TmuxConfig";
import ColorsPicker from "./ColorsPicker";

function App() {
  const state = useStore();

  return (
    <div>
      <TmuxBar />
      {state.currentTmuxElement !== "" && <ColorsPicker />}
      <TmuxConfig />
    </div>
  );
}

export default App;
