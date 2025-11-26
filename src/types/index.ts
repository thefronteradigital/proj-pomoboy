/**
 * Type definitions for the Pomoboy application
 */

export type TimerMode = "pomodoro" | "shortBreak" | "longBreak";

export interface Settings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
  longBreakInterval: number;
}
