import useStore from "./store";

export function useStyleValue(element: string, property: string): string {
  const state = useStore();
  return state.styles[element]?.[property] || "";
}
