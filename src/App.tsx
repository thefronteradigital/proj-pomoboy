import React, { useCallback, useEffect } from "react";
import type { Settings, TimerMode } from "@/types";
import { soundManager } from "@/utils/sound";
import { useTimer, useTimerMode, useSettings, useDocumentTitle } from "@/hooks";
import {
  Header,
  GameBoyScreen,
  GameBoyControls,
  SettingsModal,
  SEO,
} from "@/components";

const App: React.FC = () => {
  // Custom hooks for state management
  const {
    settings,
    updateSettings,
    isSettingsOpen,
    openSettings,
    closeSettings,
  } = useSettings();

  const {
    mode,
    cycleCount,
    pomodorosCompleted,
    switchMode,
    handleNextMode,
    handlePrevMode,
    incrementCycleCount,
    incrementPomodorosCompleted,
    getModeDuration,
  } = useTimerMode({
    settings,
    onModeChange: (newMode: TimerMode) => {
      soundManager.playModeChangeSound();
      if (!timer.isActive) {
        timer.setTimeLeft(getModeDuration(newMode));
      }
    },
  });

  // Timer complete handler
  const handleTimerComplete = useCallback(() => {
    soundManager.playTimerCompleteSound();

    if (mode === "pomodoro") {
      incrementPomodorosCompleted();
      const newCompleted = pomodorosCompleted + 1;
      const isLongBreak = newCompleted % settings.longBreakInterval === 0;
      const nextMode = isLongBreak ? "longBreak" : "shortBreak";

      switchMode(nextMode);
      if (settings.autoStartBreaks) {
        timer.setIsActive(true);
      }
    } else {
      switchMode("pomodoro");
      incrementCycleCount();
      if (settings.autoStartPomodoros) {
        timer.setIsActive(true);
      }
    }
  }, [
    mode,
    pomodorosCompleted,
    settings,
    switchMode,
    incrementCycleCount,
    incrementPomodorosCompleted,
  ]);

  const timer = useTimer({
    initialTime: getModeDuration(mode),
    onComplete: handleTimerComplete,
  });

  // Update document title
  useDocumentTitle({ timeLeft: timer.timeLeft, mode });

  // Update timer when mode changes
  useEffect(() => {
    if (!timer.isActive) {
      timer.setTimeLeft(getModeDuration(mode));
    }
  }, [mode, settings]);

  // Event handlers
  const handleToggleTimer = () => {
    const newState = !timer.isActive;
    if (newState) {
      soundManager.playStartSound();
    } else {
      soundManager.playStopSound();
    }
    timer.toggleTimer();
  };

  const handleResetTimer = () => {
    soundManager.playResetSound();
    timer.resetTimer();
  };

  const handlePrevModeWithSound = () => {
    soundManager.playButtonSound();
    handlePrevMode();
  };

  const handleNextModeWithSound = () => {
    soundManager.playButtonSound();
    handleNextMode();
  };

  const handleOpenSettings = () => {
    soundManager.playButtonSound();
    openSettings();
  };

  const handleSettingsSave = (newSettings: Settings) => {
    updateSettings(newSettings);
    if (!timer.isActive) {
      timer.setTimeLeft(newSettings[mode] * 60);
    }
  };

  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4 font-pixel select-none">
        <Header />

        {/* Game Boy Case */}
        <div className="relative bg-gb-bg w-[320px] sm:w-[350px] h-[580px] rounded-t-xl rounded-bl-xl rounded-br-[60px] shadow-[15px_15px_0_rgba(0,0,0,0.15)] flex flex-col items-center p-6 border-r-4 border-b-4 border-black/10">
          {/* Top Groove Decoration */}
          <div className="absolute top-0 left-4 right-4 h-4 border-b-2 border-black/5 opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-white/40 rounded-t-xl"></div>

          <GameBoyScreen
            mode={mode}
            cycleCount={cycleCount}
            timeLeft={timer.timeLeft}
            isActive={timer.isActive}
          />

          <GameBoyControls
            onPrevMode={handlePrevModeWithSound}
            onNextMode={handleNextModeWithSound}
            onToggleTimer={handleToggleTimer}
            onResetTimer={handleResetTimer}
            onOpenSettings={handleOpenSettings}
          />
        </div>

        <div className="fixed bottom-4 text-xs text-white/50 text-center w-full hidden sm:block">
          Controls: A/Start = Toggle | B = Reset | D-Pad = Change Mode | Select
          = Settings
        </div>

        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={closeSettings}
          settings={settings}
          onSave={handleSettingsSave}
        />
      </div>
    </>
  );
};

export default App;
