import { describe, it, expect } from "vitest";
import type { TimerMode, Settings } from "@/types";

describe("Types", () => {
  describe("TimerMode", () => {
    it("should accept pomodoro mode", () => {
      const mode: TimerMode = "pomodoro";
      expect(mode).toBe("pomodoro");
    });

    it("should accept shortBreak mode", () => {
      const mode: TimerMode = "shortBreak";
      expect(mode).toBe("shortBreak");
    });

    it("should accept longBreak mode", () => {
      const mode: TimerMode = "longBreak";
      expect(mode).toBe("longBreak");
    });
  });

  describe("Settings", () => {
    it("should have all required properties", () => {
      const settings: Settings = {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        autoStartBreaks: false,
        autoStartPomodoros: false,
        longBreakInterval: 4,
      };

      expect(settings).toHaveProperty("pomodoro");
      expect(settings).toHaveProperty("shortBreak");
      expect(settings).toHaveProperty("longBreak");
      expect(settings).toHaveProperty("autoStartBreaks");
      expect(settings).toHaveProperty("autoStartPomodoros");
      expect(settings).toHaveProperty("longBreakInterval");
    });

    it("should have correct types", () => {
      const settings: Settings = {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
        autoStartBreaks: false,
        autoStartPomodoros: false,
        longBreakInterval: 4,
      };

      expect(typeof settings.pomodoro).toBe("number");
      expect(typeof settings.shortBreak).toBe("number");
      expect(typeof settings.longBreak).toBe("number");
      expect(typeof settings.autoStartBreaks).toBe("boolean");
      expect(typeof settings.autoStartPomodoros).toBe("boolean");
      expect(typeof settings.longBreakInterval).toBe("number");
    });

    it("should allow valid timer durations", () => {
      const settings: Settings = {
        pomodoro: 30,
        shortBreak: 3,
        longBreak: 20,
        autoStartBreaks: true,
        autoStartPomodoros: true,
        longBreakInterval: 2,
      };

      expect(settings.pomodoro).toBeGreaterThan(0);
      expect(settings.shortBreak).toBeGreaterThan(0);
      expect(settings.longBreak).toBeGreaterThan(0);
      expect(settings.longBreakInterval).toBeGreaterThan(0);
    });
  });
});
