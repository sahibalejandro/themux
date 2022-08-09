// Deprecated
export interface IStyle {
  [property: string]: string | undefined;

  fg: string;
  bg: string;
}

// Deprecated
export interface IStyles {
  [elementName: string]: IStyle | undefined;
}

export interface IConfig {
  color: string;
  backgroundColor: string;
}

export interface IConfigs {
  status: IConfig;
  statusLeft: IConfig;
  windowStatus: IConfig;
  windowStatusCurrent: IConfig;
  statusRight: IConfig;
}

export interface IStore {
  // Deprecated
  styles: IStyles;

  currentElement: string;
  configs: IConfigs;

  setCurrentElement: (elementName: string) => void;
  setStyleValue: (property: string, value: string) => void;
}
