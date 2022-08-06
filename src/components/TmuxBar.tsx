import TmuxElement from "./TmuxElement";
import { useStyleValue } from "../hooks";

export default function TmuxBar() {
  const color = useStyleValue("status", "fg");
  const backgroundColor = useStyleValue("status", "bg");

  const style = { color, backgroundColor };

  return (
    <div style={style} className="tmux-status flex">
      {/* TODO: Move Tmux element names to an Enum! */}
      <TmuxElement name="statusLeft">[Session]</TmuxElement>
      <TmuxElement name="windowStatus">0:inactive-</TmuxElement>
      <TmuxElement name="windowStatusCurrent">1:active*</TmuxElement>
      <TmuxElement name="windowStatus">2:inactive</TmuxElement>
      <TmuxElement className="flex-grow" name="status" />
      <TmuxElement name="statusRight">Host Name</TmuxElement>
    </div>
  );
}
