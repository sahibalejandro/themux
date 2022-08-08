import { useEffect, useState } from "react";

import ClockColon from "./ClockColon";
import ClockNumber from "./ClockNumber";

type TimeType = {
  hourFirstDigit: string;
  hourSecondDigit: string;
  minuteFirstDigit: string;
  minuteSecondDigit: string;
};

function getCurrentTime(): TimeType {
  const date = new Date();
  const [hourFirstDigit, hourSecondDigit = "0"] = String(date.getHours()).split(
    ""
  );
  const [minuteFirstDigit, minuteSecondDigit = "0"] = String(
    date.getMinutes()
  ).split("");

  return {
    hourFirstDigit,
    hourSecondDigit,
    minuteFirstDigit,
    minuteSecondDigit,
  };
}

export default function Clock() {
  const [time, setTime] = useState<TimeType>();

  useEffect(() => {
    setInterval(() => setTime(getCurrentTime()), 1000);
  }, []);

  if (time === undefined) {
    return null;
  }

  const {
    hourFirstDigit,
    hourSecondDigit,
    minuteFirstDigit,
    minuteSecondDigit,
  } = time;

  return (
    <div className="flex gap-[1ch]">
      <ClockNumber number={hourFirstDigit} />
      <ClockNumber number={hourSecondDigit} />
      <div className="px-[2ch]">
        <ClockColon />
      </div>
      <ClockNumber number={minuteFirstDigit} />
      <ClockNumber number={minuteSecondDigit} />
    </div>
  );
}
