import Terminal from "./Terminal";
import ElementsPanel from "./ElementsPanel";
import Header from "./Header";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="shrink-0 border-b border-slate-300">
        <Header />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="flex-grow bg-slate-200 border-r border-slate-300 overflow-scroll py-8">
          <div className="mx-auto w-[1024px]">
            <Terminal />
          </div>
        </div>
        <div className="w-[400px]">
          <ElementsPanel />
        </div>
      </div>
    </div>
  );
}
