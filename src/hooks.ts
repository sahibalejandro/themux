import useStore from "./store";

// Possible deprecated
export function useStyleValue(element: string, property: string): string {
  const state = useStore();
  return state.styles[element]?.[property] || "";
}

export function useElementProperties(elementName: string) {
  const state = useStore();
  return state.elementsProperties[elementName];
}
