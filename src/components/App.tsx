import TmuxBar from "./TmuxBar";
//import TmuxConfig from "./TmuxConfig";
import ColorPicker from "./ColorPicker";

function App() {
  return (
    <div className="px-8">
      <h1 className="text-5xl mt-8">Tmux Theme Editor</h1>
      <div className="flex mt-8">
        <div className="flex-grow">
          <TmuxBar />
        </div>
        <div className="ml-8 w-80">
          <ColorPicker />
        </div>
      </div>
      {/*<TmuxConfig />*/}
    </div>
  );
}

export default App;
