import { describe, it, expect, vi, beforeEach } from "vitest";
import { soundManager } from "@/utils/sound";

describe("SoundManager", () => {
  beforeEach(() => {
    // Mock AudioContext
    global.AudioContext = vi.fn() as any;
  });

  it("should create a soundManager instance", () => {
    expect(soundManager).toBeDefined();
  });

  it("should have all sound methods", () => {
    expect(soundManager.playBeep).toBeDefined();
    expect(soundManager.playModeChangeSound).toBeDefined();
    expect(soundManager.playButtonSound).toBeDefined();
    expect(soundManager.playTimerCompleteSound).toBeDefined();
    expect(soundManager.playStartSound).toBeDefined();
    expect(soundManager.playStopSound).toBeDefined();
    expect(soundManager.playResetSound).toBeDefined();
  });

  it("should handle playBeep without errors", () => {
    expect(() => {
      soundManager.playBeep({ frequency: 440, duration: 100 });
    }).not.toThrow();
  });

  it("should handle mode change sound", () => {
    expect(() => {
      soundManager.playModeChangeSound();
    }).not.toThrow();
  });

  it("should handle button sound", () => {
    expect(() => {
      soundManager.playButtonSound();
    }).not.toThrow();
  });

  it("should handle timer complete sound", () => {
    expect(() => {
      soundManager.playTimerCompleteSound();
    }).not.toThrow();
  });

  it("should handle start sound", () => {
    expect(() => {
      soundManager.playStartSound();
    }).not.toThrow();
  });

  it("should handle stop sound", () => {
    expect(() => {
      soundManager.playStopSound();
    }).not.toThrow();
  });

  it("should handle reset sound", () => {
    expect(() => {
      soundManager.playResetSound();
    }).not.toThrow();
  });
});
