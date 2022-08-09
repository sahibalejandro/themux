import useStore from "../store";
import Terminal from "./Terminal";
import ColorPicker from "./ColorPicker";

function App() {
  const state = useStore();
  return (
    <div className="px-8">
      <h1 className="text-5xl mt-8">Tmux Theme Editor</h1>
      <div className="flex mt-8">
        <div className="flex-grow">
          <Terminal />
        </div>
        <div className="ml-8 w-80">
          {state.currentElement}
          <ColorPicker />
        </div>
      </div>
    </div>
  );
}

export default App;
