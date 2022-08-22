export function keepWhitespaces(text: string) {
  return text.replace(/ /g, "\u00a0");
}
