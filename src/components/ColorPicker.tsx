import useStore from '../store'
import { useStyleValue } from '../hooks'

type Props = {
  property: 'fg' | 'bg'
}

export default function (props: Props) {
  const state = useStore()
  const styleValue = useStyleValue(state.currentTmuxElement, props.property)

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    state.setStyleValue(props.property, e.target.value)
  }

  return (
    <div>
      Color picker for {props.property}{' '}
      #<input type="text" value={styleValue} onChange={handleOnChange} />
    </div>
  )
}
