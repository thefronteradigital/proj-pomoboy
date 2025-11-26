import { useState, useCallback } from "react";
import type { TimerMode, Settings } from "@/types";

interface UseTimerModeProps {
  settings: Settings;
  onModeChange?: (mode: TimerMode) => void;
}

interface UseTimerModeReturn {
  mode: TimerMode;
  cycleCount: number;
  pomodorosCompleted: number;
  switchMode: (newMode: TimerMode) => void;
  handleNextMode: () => void;
  handlePrevMode: () => void;
  incrementCycleCount: () => void;
  incrementPomodorosCompleted: () => void;
  getModeDuration: (mode: TimerMode) => number;
}

/**
 * Custom hook for managing timer modes and transitions
 */
export const useTimerMode = ({
  settings,
  onModeChange,
}: UseTimerModeProps): UseTimerModeReturn => {
  const [mode, setMode] = useState<TimerMode>("pomodoro");
  const [cycleCount, setCycleCount] = useState(1);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);

  const getModeDuration = useCallback(
    (targetMode: TimerMode) => settings[targetMode] * 60,
    [settings]
  );

  const switchMode = useCallback(
    (newMode: TimerMode) => {
      setMode(newMode);
      onModeChange?.(newMode);
    },
    [onModeChange]
  );

  const handleNextMode = useCallback(() => {
    if (mode === "pomodoro") switchMode("shortBreak");
    else if (mode === "shortBreak") switchMode("longBreak");
    else switchMode("pomodoro");
  }, [mode, switchMode]);

  const handlePrevMode = useCallback(() => {
    if (mode === "pomodoro") switchMode("longBreak");
    else if (mode === "shortBreak") switchMode("pomodoro");
    else switchMode("shortBreak");
  }, [mode, switchMode]);

  const incrementCycleCount = useCallback(() => {
    setCycleCount((c) => c + 1);
  }, []);

  const incrementPomodorosCompleted = useCallback(() => {
    setPomodorosCompleted((p) => p + 1);
  }, []);

  return {
    mode,
    cycleCount,
    pomodorosCompleted,
    switchMode,
    handleNextMode,
    handlePrevMode,
    incrementCycleCount,
    incrementPomodorosCompleted,
    getModeDuration,
  };
};
