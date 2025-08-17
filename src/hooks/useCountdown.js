import { useEffect, useState } from "react";

export default function useCountdown(seconds, onTimeout) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const resetTimer = () => setTimeLeft(seconds);

  return [timeLeft, resetTimer];
}
