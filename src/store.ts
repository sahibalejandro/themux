import produce from "immer";
import create from "zustand";

import type { IStore, IElementProperty } from "./types";
import elementsProperties from "./elementsProperties";

export default create<IStore>((set) => {
  const store: IStore = {
    currentElement: "status",
    elementsProperties,

    setCurrentElement: (elementName: string) =>
      set({ currentElement: elementName }),

    setPropertyValue: (
      elementName: string,
      property: IElementProperty,
      value: string
    ) => set((state) => {}),
  };

  return store;
});
