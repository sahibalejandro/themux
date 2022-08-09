import Selectable from "./Selectable";

export default function SessionsList() {
  return (
    <Selectable elementName="sessions-list">
      <div>(0) + laravel: 2 windows</div>
      <div className="bg-lime-600">(1) + themux: 3 windows (attached)</div>
      <div>(2) + typescript: 1 windows</div>
    </Selectable>
  );
}
