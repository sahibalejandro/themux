export interface IStyle {
  [key: string]: string | undefined;

  fg: string;
  bg: string;
}

export interface IStyles {
  [key: string]: IStyle | undefined;
}

export interface IStore {
  styles: IStyles;
  currentElement: string;
  setCurrentElement: (elementName: string) => void;
  setStyleValue: (property: string, value: string) => void;
}
