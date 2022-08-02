import type { IReducerAction, IStylesState } from './types'
import { StylesReducerActions } from './types'

function updateStyleProp(state: IStylesState, prop: string, value: string): IStylesState {
  const elementsStyles = { ...state.elementsStyles }
  const style = elementsStyles[state.currentElement]

  if (style !== undefined) {
    style[prop] = value
  }

  return { ...state, elementsStyles }
}

export function stylesReducer(state: IStylesState, action: IReducerAction): IStylesState {
  switch (action.type) {
    case StylesReducerActions.SET_CURRENT_ELEMENT:
      return { ...state, currentElement: action.payload }

    case StylesReducerActions.SET_FG_COLOR:
      return updateStyleProp(state, 'fg', action.payload)

    case StylesReducerActions.SET_BG_COLOR:
      return updateStyleProp(state, 'bg', action.payload)

    default:
      return state
  }
}
