import create from "zustand";

import type { IStore } from "./types";

export default create<IStore>((set) => {
  const store: IStore = {
    // TODO: Move tmux element names to an Enum!
    currentElement: "statusLeft",

    styles: {
      statusLeft: { fg: "#191726", bg: "#a3be8c" },
      statusRight: { fg: "#191726", bg: "#a3be8c" },
      windowStatus: { fg: "b7b3d1", bg: "" },
      windowStatusCurrent: { fg: "", bg: "#3a3659" },
      status: { fg: "#f2f3f7", bg: "#191726" },
    },

    setCurrentElement: (elementName: string) => {
      return set({ currentElement: elementName });
    },

    setStyleValue: (property: string, value: string) => {
      return set((state) => {
        const styles = { ...state.styles };

        if (styles[state.currentElement] !== undefined) {
          styles[state.currentElement]![property] = value;
        }

        return { styles };
      });
    },
  };

  return store;
});
