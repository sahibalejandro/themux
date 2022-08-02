export interface IStyle {
  [key: string]: string | undefined
  fg: string
  bg: string
}

export interface IStyles {
  [key: string]: IStyle | undefined
}

export interface IStore {
  currentTmuxElement: string
  styles: IStyles
  setCurrentTmuxElement: (tmuxElement: string) => void
  setStyleValue: (property: string, value: string) => void
}
