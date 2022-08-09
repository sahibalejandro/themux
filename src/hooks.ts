import useStore from "./store";
import type { IConfigs } from "./types";

// Possible deprecated
export function useStyleValue(element: string, property: string): string {
  const state = useStore();
  return state.styles[element]?.[property] || "";
}

export function useElementConfig(elementName: keyof IConfigs) {
  const state = useStore();
  return state.configs[elementName];
}
