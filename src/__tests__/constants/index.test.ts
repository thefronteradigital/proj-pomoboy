import { describe, it, expect } from "vitest";
import { DEFAULT_SETTINGS, MODE_LABELS } from "@/constants";
import type { TimerMode, Settings } from "@/types";

describe("Constants", () => {
  describe("DEFAULT_SETTINGS", () => {
    it("should have correct default pomodoro duration", () => {
      expect(DEFAULT_SETTINGS.pomodoro).toBe(25);
    });

    it("should have correct default short break duration", () => {
      expect(DEFAULT_SETTINGS.shortBreak).toBe(5);
    });

    it("should have correct default long break duration", () => {
      expect(DEFAULT_SETTINGS.longBreak).toBe(15);
    });

    it("should have autoStartBreaks set to false by default", () => {
      expect(DEFAULT_SETTINGS.autoStartBreaks).toBe(false);
    });

    it("should have autoStartPomodoros set to false by default", () => {
      expect(DEFAULT_SETTINGS.autoStartPomodoros).toBe(false);
    });

    it("should have longBreakInterval set to 4 by default", () => {
      expect(DEFAULT_SETTINGS.longBreakInterval).toBe(4);
    });

    it("should match Settings interface", () => {
      const settings: Settings = DEFAULT_SETTINGS;
      expect(settings).toHaveProperty("pomodoro");
      expect(settings).toHaveProperty("shortBreak");
      expect(settings).toHaveProperty("longBreak");
      expect(settings).toHaveProperty("autoStartBreaks");
      expect(settings).toHaveProperty("autoStartPomodoros");
      expect(settings).toHaveProperty("longBreakInterval");
    });
  });

  describe("MODE_LABELS", () => {
    it("should have label for pomodoro mode", () => {
      expect(MODE_LABELS.pomodoro).toBe("POMODORO");
    });

    it("should have label for short break mode", () => {
      expect(MODE_LABELS.shortBreak).toBe("SHORT BREAK");
    });

    it("should have label for long break mode", () => {
      expect(MODE_LABELS.longBreak).toBe("LONG BREAK");
    });

    it("should have all timer modes", () => {
      const modes: TimerMode[] = ["pomodoro", "shortBreak", "longBreak"];
      modes.forEach((mode) => {
        expect(MODE_LABELS[mode]).toBeDefined();
        expect(typeof MODE_LABELS[mode]).toBe("string");
      });
    });

    it("should not have empty labels", () => {
      Object.values(MODE_LABELS).forEach((label) => {
        expect(label.length).toBeGreaterThan(0);
      });
    });
  });
});
