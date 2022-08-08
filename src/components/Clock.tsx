import { useCallback, useEffect, useState } from "react";

import ClockColon from "./ClockColon";
import ClockNumber from "./ClockNumber";

type TimeDigitsType = {
  hourFirstDigit: string;
  hourSecondDigit: string;
  minuteFirstDigit: string;
  minuteSecondDigit: string;
};

function padZero([firstDigit, secondDigit]: string[]) {
  return secondDigit === undefined
    ? ["0", firstDigit]
    : [firstDigit, secondDigit];
}

function getCurrentTimeDigits(): TimeDigitsType {
  const date = new Date();
  const [hourFirstDigit, hourSecondDigit] = padZero(
    date.getHours().toString().split("")
  );
  const [minuteFirstDigit, minuteSecondDigit] = padZero(
    date.getMinutes().toString().split("")
  );

  return {
    hourFirstDigit,
    hourSecondDigit,
    minuteFirstDigit,
    minuteSecondDigit,
  };
}

export default function Clock() {
  const [time, setTime] = useState<TimeDigitsType>(
    useCallback(() => getCurrentTimeDigits(), [])
  );

  useEffect(() => {
    const intervalId = setInterval(() => setTime(getCurrentTimeDigits()), 1000);
    return () => clearInterval(intervalId);
  }, []);

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
