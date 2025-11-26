/**
 * Application constants and configuration
 */

import type { Settings, TimerMode } from "../types";

/**
 * Default timer settings for each mode
 */
export const DEFAULT_SETTINGS: Settings = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  autoStartBreaks: false,
  autoStartPomodoros: false,
  longBreakInterval: 4,
};

/**
 * Display labels for timer modes
 */
export const MODE_LABELS: Record<TimerMode, string> = {
  pomodoro: "FOCUS",
  shortBreak: "BREAK",
  longBreak: "LONG BREAK",
};
