export interface IStyle {
  [key: string]: string | undefined
  fg: string
  bg: string
}

export interface IElementsStyles {
  [key: string]: IStyle | undefined
}

export interface IStylesState {
  currentElement: string
  elementsStyles: IElementsStyles
}

export interface IReducerAction {
  type: string
  payload: any
}

export enum StylesReducerActions {
  SET_CURRENT_ELEMENT = 'SET_CURRENT_ELEMENT',
  SET_FG_COLOR = 'SET_FG_COLOR',
  SET_BG_COLOR = 'SET_BG_COLOR',
}
