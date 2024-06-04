import { useState, useEffect } from "react";

export function useNow(interval: number, enabled: boolean) {
  const [now, setNow] = useState<number | undefined>();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }

    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);

  return now;
}
