import { useState, useEffect, useRef } from "react";

export const useTimer = (durationInSecondes: number = 0) => {
  const timerRef = useRef<any>(null);
  const timeRef = useRef(durationInSecondes);
  const [time, setTime] = useState(timeRef.current);

  useEffect(() => () => reset(), []);

  const start = () => {
    reset();

    timerRef.current = setInterval(() => {
      setTime(() => {
        if (timeRef.current <= 1) {
          clearInterval(timerRef.current);
        }

        timeRef.current -= 1;
        return timeRef.current;
      });
    }, 1000);
  };

  const reset = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    setTime(durationInSecondes);
    timeRef.current = durationInSecondes;
  };

  return {
    time,
    start,
    reset,
  };
};
