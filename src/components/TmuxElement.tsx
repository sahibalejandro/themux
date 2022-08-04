import classnames from 'classnames'

import { useStyleValue } from '../hooks'
import useStore from '../store'

type Props = {
  name: string
  className?: string
  children: React.ReactNode
}

export default function TmuxElement(props: Props) {
  const state = useStore()
  const color = useStyleValue(props.name, 'fg')
  const backgroundColor = useStyleValue(props.name, 'bg')

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
    color: `#${color}`,
    backgroundColor: `#${backgroundColor}`,
  }

  return (
    <div className={className} style={style} onClick={handleOnClick(props.name)}>{props.children}</div>
  )
}
