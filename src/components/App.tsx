import useStore from '../store'
import TmuxConfig from './TmuxConfig'
import ColorPicker from './ColorPicker'
import TmuxElement from './TmuxElement'
import { useStyleValue } from '../hooks'

function App() {
  const state = useStore()
  const tmuxStatusColor = useStyleValue('status', 'fg')
  const tmuxStatusBackgroundColor = useStyleValue('status', 'bg')

  const tmuxStatusStyle = {
    color: `#${tmuxStatusColor}`,
    backgroundColor: `#${tmuxStatusBackgroundColor}`,
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
