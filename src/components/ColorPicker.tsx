import useStore from '../store'
import { getStyleValue } from '../utils'

type Props = {
  property: 'fg' | 'bg'
}

export default function (props: Props) {
  const state = useStore()

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    state.setStyleValue(props.property, e.target.value)
  }

  return (
    <div>
      Color picker for {props.property}{' '}
      #<input type="text" value={getStyleValue(state, state.currentTmuxElement, props.property)} onChange={handleOnChange} />
    </div>
  )
}
