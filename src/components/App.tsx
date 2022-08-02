import useStore from '../store'
import TmuxConfig from './TmuxConfig'
import ColorPicker from './ColorPicker'
import TmuxElement from './TmuxElement'
import { getStyleValue } from '../utils'

function App() {
  const state = useStore()

  const tmuxStatusStyle = {
    color: `#${getStyleValue(state, 'status', 'fg')}`,
    backgroundColor: `#${getStyleValue(state, 'status', 'bg')}`,
  }

  return (
    <div>
      <div className="tmux-status flex max-w-screen-lg mx-auto mt-32" style={tmuxStatusStyle}>
        <TmuxElement name="statusLeft">[Session]</TmuxElement>
        <TmuxElement name="windowStatus">0:inactive-</TmuxElement>
        <TmuxElement name="windowStatusCurrent">1:active*</TmuxElement>
        <TmuxElement name="windowStatus">2:inactive</TmuxElement>
        <TmuxElement className="flex-grow" name="status">{/* Status empty space */}</TmuxElement>
        <TmuxElement name="statusRight">Host Name</TmuxElement>
      </div>
      {state.currentTmuxElement !== '' && (
        <>
          <ColorPicker property="fg" />
          <ColorPicker property="bg" />
        </>
      )}
      <TmuxConfig />
    </div>
  )
}

export default App
