import numbers from "./clockNumbers";

type PropsType = {
  number: number | string;
};

export default function ClockNumber(props: PropsType) {
  return (
    <div className="clock-number">
      {numbers[Number(props.number)].map((colorize: boolean, index: number) => (
        <div
          key={`cell-${index}`}
          className={colorize ? "bg-slate-200" : ""}
        ></div>
      ))}
    </div>
  );
}
