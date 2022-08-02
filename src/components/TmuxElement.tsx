import type { IReducerAction, IStylesState } from '../types'
import { StylesReducerActions } from '../types'
import classnames from 'classnames'
import { getStyleValue } from '../utils'

type Props = {
  name: string
  className?: string
  stylesState: IStylesState
  children: React.ReactNode
  dispatch: (action: IReducerAction) => void
}

export default function TmuxElement(props: Props) {
  function handleOnClick(name: string) {
    return () => {
      props.dispatch({ type: StylesReducerActions.SET_CURRENT_ELEMENT, payload: name })
    }
  }

  const className = classnames(
    'tmux-element',
    props.className,
    { 'active': props.stylesState.currentElement === props.name }
  )

  const style = {
    color: `#${getStyleValue(props.stylesState, props.name, 'fg')}`,
    backgroundColor: `#${getStyleValue(props.stylesState, props.name, 'bg')}`,
  }

  return (
    <div className={className} style={style} onClick={handleOnClick(props.name)}>{props.children}</div>
  )
}
