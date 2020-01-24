import { useEffect, useState } from "react";
import moment from "moment";

export default function useTime() {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment());
    }, 1e3);
    return () => clearInterval(timer);
  }, []);

  return time;
}
