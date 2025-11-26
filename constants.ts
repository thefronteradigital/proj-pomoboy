import { Settings, TimerMode } from "./types";

export const DEFAULT_SETTINGS: Settings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
};

export const MODE_LABELS: Record<TimerMode, string> = {
  pomodoro: "POMODORO",
  shortBreak: "SHORT BREAK",
  longBreak: "LONG BREAK",
};
