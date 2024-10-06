import { useEffect, useState } from "react";

export const useNow = (interval: number, enabled: boolean) => {
  const [now, setNow] = useState<number>();

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
};

export const useInterval = (
  interval: number,
  enabled: boolean,
  cb: () => void
) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    const int = setInterval(() => {
      cb();
    }, interval);

    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);
};
