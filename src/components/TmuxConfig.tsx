import type { IStylesState } from '../types'

type Props = {
  stylesState: IStylesState
}

export default function TmuxConfig(props: Props) {
  const { stylesState: { elementsStyles } } = props
  const config = `set-option -g status-style "fg=#${elementsStyles.status?.fg} bg=#${elementsStyles.status?.bg}"
set-option -g status-left-length 25
set-option -g status-left "#[fg=#191726 bg=#a3be8c] #S "
set-option -g status-right ""
set-option -g message-style "fg=#f3f2f7 bg=#3a3659"
set-option -g message-command-style "fg=#b7b3d1 bg=#191716"
set-option -wg window-status-separator ""
set-option -wg window-status-format "#[fg=#b7b3d1] #{window_index} #{window_name} #{window_flags} "
set-option -wg window-status-current-format "#[bg=#3a3659] #{window_index} #{window_name} #{window_flags} "
set-option -wg mode-style "fg=#f3f2f7 bg=#3a3659"
set-option -pg pane-border-style "fg=#191716"
set-option -pg pane-active-border-style "fg=#a3be8c"`

  return (
    <div className="max-w-screen-lg mx-auto">
      <textarea className="w-full h-80 resize-none" value={config} readOnly />
    </div>
  )
}
