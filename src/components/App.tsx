import Terminal from "./Terminal";
import PropertiesPanel from "./PropertiesPanel";

function App() {
  return (
    <div className="px-8 pb-16">
      <h1 className="text-5xl mt-8">Tmux Theme Editor</h1>
      <div className="flex mt-8">
        <div className="flex-grow">
          <Terminal />
        </div>
        <div className="ml-8 w-80">
          <PropertiesPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
