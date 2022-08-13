type PropsType = {
  style: any;
};

export default function ClockColon(props: PropsType) {
  return (
    <div className="grid grid-cols-[1ch] grid-rows-[repeat(5,1em)]">
      <div></div>
      <div style={props.style}></div>
      <div></div>
      <div style={props.style}></div>
      <div></div>
    </div>
  );
}
