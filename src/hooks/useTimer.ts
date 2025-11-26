import { useState, useEffect, useRef, useCallback } from "react";
import type { TimerMode } from "@/types";

interface UseTimerProps {
  initialTime: number;
  onComplete: () => void;
}

interface UseTimerReturn {
  timeLeft: number;
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
  setTimeLeft: (time: number) => void;
  setIsActive: (active: boolean) => void;
}

/**
 * Custom hook for managing timer state and logic
 */
export const useTimer = ({
  initialTime,
  onComplete,
}: UseTimerProps): UseTimerReturn => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isActive) {
      const startTime = Date.now();
      const initialTimeLeft = timeLeft;

      timerRef.current = window.setInterval(() => {
        const secondsPassed = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = initialTimeLeft - secondsPassed;

        if (newTimeLeft <= 0) {
          setTimeLeft(0);
          onComplete();
        } else {
          setTimeLeft(newTimeLeft);
        }
      }, 100);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, onComplete, timeLeft]);

  const toggleTimer = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeLeft(initialTime);
  }, [initialTime]);

  return {
    timeLeft,
    isActive,
    toggleTimer,
    resetTimer,
    setTimeLeft,
    setIsActive,
  };
};
