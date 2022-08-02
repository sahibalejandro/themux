import { useReducer } from 'react'

import ColorPicker from './ColorPicker'
import TmuxElement from './TmuxElement'
import TmuxConfig from './TmuxConfig'
import { stylesReducer } from '../reducers'
import type { IStylesState } from '../types'
import { getStyleValue } from '../utils'

function makeStylesInitialState(): IStylesState {
  return {
    currentElement: '',
    elementsStyles: {
      statusLeft: { fg: '191726', bg: 'a3be8c' },
      statusRight: { fg: '191726', bg: 'a3be8c' },
      windowStatus: { fg: 'b7b3d1', bg: '' },
      windowStatusCurrent: { fg: '', bg: '3a3659' },
      status: { fg: 'f2f3f7', bg: '191716' },
    }
  }
}

function App() {
  const [stylesState, dispatch] = useReducer(stylesReducer, {}, makeStylesInitialState)
  const tmuxStatusStyle = {
    color: `#${getStyleValue(stylesState, 'status', 'fg')}`,
    backgroundColor: `#${getStyleValue(stylesState, 'status', 'bg')}`,
  }

  return (
    <div>
      <div className="tmux-status flex max-w-screen-lg mx-auto mt-32" style={tmuxStatusStyle}>
        <TmuxElement name="statusLeft" stylesState={stylesState} dispatch={dispatch}>[Session]</TmuxElement>
        <TmuxElement name="windowStatus" stylesState={stylesState} dispatch={dispatch}>0:inactive-</TmuxElement>
        <TmuxElement name="windowStatusCurrent" stylesState={stylesState} dispatch={dispatch}>1:active*</TmuxElement>
        <TmuxElement name="windowStatus" stylesState={stylesState} dispatch={dispatch}>2:inactive</TmuxElement>
        <TmuxElement className="flex-grow" name="status" stylesState={stylesState} dispatch={dispatch}>{/* Status empty space */}</TmuxElement>
        <TmuxElement name="statusRight" stylesState={stylesState} dispatch={dispatch}>Host Name</TmuxElement>
      </div>
      {stylesState.currentElement !== '' && (
        <>
          <ColorPicker type="fg" stylesState={stylesState} dispatch={dispatch} />
          <ColorPicker type="bg" stylesState={stylesState} dispatch={dispatch} />
        </>
      )}
      <TmuxConfig stylesState={stylesState} />
    </div>
  )
}

export default App
