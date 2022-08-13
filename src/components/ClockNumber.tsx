import numbers from "./clockNumbers";

type PropsType = {
  number: number | string;
  style: any;
};

export default function ClockNumber(props: PropsType) {
  return (
    <div className="clock-number">
      {numbers[Number(props.number)].map((colorize: boolean, idx: number) => (
        <div key={`cell-${idx}`} style={colorize ? props.style : {}}></div>
      ))}
    </div>
  );
}
