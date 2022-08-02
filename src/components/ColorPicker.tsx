import { StylesReducerActions } from '../types'
import type { IReducerAction, IStylesState } from '../types'
import { getStyleValue } from '../utils'

type Props = {
  type: 'fg' | 'bg'
  stylesState: IStylesState
  dispatch: (action: IReducerAction) => void
}

const actionTypes = {
  fg: StylesReducerActions.SET_FG_COLOR,
  bg: StylesReducerActions.SET_BG_COLOR,
}

export default function (props: Props) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.dispatch({ type: actionTypes[props.type], payload: e.target.value })
  }

  return (
    <div>
      Color picker for {props.type}{' '}
      #<input type="text" value={getStyleValue(props.stylesState, props.stylesState.currentElement, props.type)} onChange={handleOnChange} />
    </div>
  )
}
