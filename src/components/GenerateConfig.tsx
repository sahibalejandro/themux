import { useState, useRef } from "react";

import Modal from "./Modal";
import { getTmuxConfigValues } from "../utils";

function GenerateConfig() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showConfig, setShowConfig] = useState(false);

  const {
    mode,
    pane,
    clock,
    status,
    paneActive,
    statusLeft,
    statusRight,
    windowStatus,
    windowStatusCurrent,
  } = getTmuxConfigValues();

  function toggleConfigOverlay() {
    setShowConfig(!showConfig);
  }

  function handleCopyClick() {
    if (textareaRef.current === null) {
      return;
    }

    textareaRef.current.select();
    document.execCommand("copy");
  }

  function handleCloseClick() {
    toggleConfigOverlay();
  }

  function getTmuxConfig() {
    return `# Session Options
set-option -g status-style "bg=${status.bg}"
set-option -g status-left "#[fg=${statusLeft.prefix.fg} bg=${statusLeft.prefix.bg}]${statusLeft.prefix.text}#[fg=${statusLeft.fg} bg=${statusLeft.bg}]#S#[fg=${statusLeft.suffix.fg} bg=${statusLeft.suffix.bg}]${statusLeft.suffix.text}"
set-option -g status-right "#[fg=${statusRight.prefix.fg} bg=${statusRight.prefix.bg}]${statusRight.prefix.text}#[fg=${statusRight.fg} bg=${statusRight.bg}]#H#[fg=${statusRight.suffix.fg} bg=${statusRight.suffix.bg}]${statusRight.suffix.text}"

# Window Options
set-option -wg window-status-format "#[fg=${windowStatus.prefix.fg} bg=${windowStatus.prefix.bg}]${windowStatus.prefix.text}#[fg=${windowStatus.fg} bg=${windowStatus.bg}]#I:#W#F#[fg=${windowStatus.suffix.fg} bg=${windowStatus.suffix.bg}]${windowStatus.suffix.text}"
set-option -wg window-status-current-format "#[fg=${windowStatusCurrent.prefix.fg} bg=${windowStatusCurrent.prefix.bg}]${windowStatusCurrent.prefix.text}#[fg=${windowStatusCurrent.fg} bg=${windowStatusCurrent.bg}]#I:#W#F#[fg=${windowStatusCurrent.suffix.fg} bg=${windowStatusCurrent.suffix.bg}]${windowStatusCurrent.suffix.text}"
set-option -wg mode-style "fg=${mode.fg} bg=${mode.bg}"
set-option -wg clock-mode-colour "${clock.fg}"

# Pane Options
set-option -pg pane-border-style "fg=${pane.fg}"
set-option -pg pane-active-border-style "fg=${paneActive.fg}"`;
  }

  return (
    <>
      <button type="button" className="button" onClick={toggleConfigOverlay}>
        Generate Tmux Config
      </button>
      {showConfig && (
        <Modal onClose={toggleConfigOverlay}>
          <div className="p-4">
            <div className="text-right">
              <button
                className="button success"
                type="button"
                onClick={handleCopyClick}
              >
                Copy Code
              </button>
              <button
                className="ml-4 button"
                type="button"
                onClick={handleCloseClick}
              >
                &times;
              </button>
            </div>
            <textarea
              ref={textareaRef}
              className="mt-4 w-[1024px] h-96 font-source-code-pro text-sm bg-slate-200 rounded-lg p-2 whitespace-pre resize-none"
              defaultValue={getTmuxConfig()}
              readOnly
            ></textarea>
          </div>
        </Modal>
      )}
    </>
  );
}

export default GenerateConfig;
