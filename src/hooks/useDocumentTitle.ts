import { useEffect } from "react";
import type { TimerMode } from "@/types";

interface UseDocumentTitleProps {
  timeLeft: number;
  mode: TimerMode;
}

/**
 * Custom hook for updating document title based on timer state
 */
export const useDocumentTitle = ({
  timeLeft,
  mode,
}: UseDocumentTitleProps): void => {
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    const modeText =
      mode === "pomodoro"
        ? "Focus"
        : mode === "shortBreak"
        ? "Break"
        : "Long Break";

    document.title = `${formattedTime} - ${modeText}`;
  }, [timeLeft, mode]);
};
