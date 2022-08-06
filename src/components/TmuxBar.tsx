import TmuxElement from "./TmuxElement";
import { useStyleValue } from "../hooks";

export default function TmuxBar() {
  const tmuxStatusColor = useStyleValue("status", "fg");
  const tmuxStatusBackgroundColor = useStyleValue("status", "bg");

  const tmuxStatusStyle = {
    color: `#${tmuxStatusColor}`,
    backgroundColor: `#${tmuxStatusBackgroundColor}`,
  };

  return (
    <div
      style={tmuxStatusStyle}
      className="tmux-status flex max-w-screen-lg mx-auto mt-32"
    >
      <TmuxElement name="statusLeft">[Session]</TmuxElement>
      <TmuxElement name="windowStatus">0:inactive-</TmuxElement>
      <TmuxElement name="windowStatusCurrent">1:active*</TmuxElement>
      <TmuxElement name="windowStatus">2:inactive</TmuxElement>
      <TmuxElement className="flex-grow" name="status" />
      <TmuxElement name="statusRight">Host Name</TmuxElement>
    </div>
  );
}
