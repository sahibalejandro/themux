type PropsType = {
  number: number | string;
};

const X = true;
const _ = false;

// prettier-ignore
const NUMBERS = [
  [
    X,X,X,X,X,
    X,_,_,_,X,
    X,_,_,_,X,
    X,_,_,_,X,
    X,X,X,X,X,
  ],
  [
    _,_,_,_,X,
    _,_,_,_,X,
    _,_,_,_,X,
    _,_,_,_,X,
    _,_,_,_,X,
  ],
  [
    X,X,X,X,X,
    _,_,_,_,X,
    X,X,X,X,X,
    X,_,_,_,_,
    X,X,X,X,X,
  ],
  [
    X,X,X,X,X,
    _,_,_,_,X,
    X,X,X,X,X,
    _,_,_,_,X,
    X,X,X,X,X,
  ],
  [
    X,_,_,_,X,
    X,_,_,_,X,
    X,X,X,X,X,
    _,_,_,_,X,
    _,_,_,_,X,
  ],
  [
    X,X,X,X,X,
    X,_,_,_,_,
    X,X,X,X,X,
    _,_,_,_,X,
    X,X,X,X,X,
  ],
  [
    X,X,X,X,X,
    X,_,_,_,_,
    X,X,X,X,X,
    X,_,_,_,X,
    X,X,X,X,X,
  ],
  [
    X,X,X,X,X,
    _,_,_,_,X,
    _,_,_,_,X,
    _,_,_,_,X,
    _,_,_,_,X,
  ],
  [
    X,X,X,X,X,
    X,_,_,_,X,
    X,X,X,X,X,
    X,_,_,_,X,
    X,X,X,X,X,
  ],
  [
    X,X,X,X,X,
    X,_,_,_,X,
    X,X,X,X,X,
    _,_,_,_,X,
    _,_,_,_,X,
  ],
]

export default function ClockNumber(props: PropsType) {
  console.log(props.number);

  return (
    <div className="clock-number">
      {NUMBERS[props.number].map((colorize, index) => (
        <div
          key={`cell-${index}`}
          className={colorize ? "bg-slate-200" : ""}
        ></div>
      ))}
    </div>
  );
}
