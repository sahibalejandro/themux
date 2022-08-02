import classnames from 'classnames'

import { getStyleValue } from '../utils'
import useStore from '../store'

type Props = {
  name: string
  className?: string
  children: React.ReactNode
}

export default function TmuxElement(props: Props) {
  const state = useStore()

  function handleOnClick(tmuxElement: string) {
    return () => {
      state.setCurrentTmuxElement(tmuxElement)
    }
  }

  const className = classnames(
    'tmux-element',
    props.className,
    { 'active': state.currentTmuxElement === props.name }
  )

  const style = {
    color: `#${getStyleValue(state, props.name, 'fg')}`,
    backgroundColor: `#${getStyleValue(state, props.name, 'bg')}`,
  }

  return (
    <div className={className} style={style} onClick={handleOnClick(props.name)}>{props.children}</div>
  )
}
