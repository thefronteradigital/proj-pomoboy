import React from "react";
import type { TimerMode } from "@/types";
import { MODE_LABELS } from "@/constants";

interface GameBoyScreenProps {
  mode: TimerMode;
  cycleCount: number;
  timeLeft: number;
  isActive: boolean;
}

/**
 * GameBoy screen display component
 */
export const GameBoyScreen: React.FC<GameBoyScreenProps> = ({
  mode,
  cycleCount,
  timeLeft,
  isActive,
}) => {
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-gb-bezel w-full h-[240px] rounded-t-lg rounded-b-[40px] p-6 shadow-md relative mb-8 flex flex-col items-center">
      {/* Bezel Text */}
      <div className="w-full flex justify-between items-center text-[10px] text-[#b3b3b3] mb-1 px-2 font-sans font-bold tracking-wider">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_5px_rgba(255,0,0,0.8)]"></div>
          <span>BATTERY</span>
        </div>
      </div>

      {/* Actual Screen */}
      <div className="bg-gb-screen w-full h-full shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2)] border-4 border-[#8bac0f] flex flex-col items-center justify-between p-3 relative overflow-hidden">
        {/* Pixel Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,56,15,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,56,15,0.05)_1px,transparent_1px)] bg-[size:3px_3px] pointer-events-none"></div>

        {/* Screen Content */}
        <div className="w-full flex justify-between items-end border-b-2 border-gb-pixel/30 pb-1 mb-2 z-10 gap-2">
          <span className="text-gb-pixel text-[8px] leading-tight truncate flex-1">
            {MODE_LABELS[mode]}
          </span>
          <span className="text-gb-pixel text-[10px] whitespace-nowrap">
            #{cycleCount}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center z-10 w-full px-1">
          <div className="text-gb-pixel text-4xl tracking-tight leading-none font-bold">
            {formatTime(timeLeft)}
          </div>
          <div className="mt-2 text-gb-pixel text-[10px] animate-pulse whitespace-nowrap">
            {isActive ? "► RUNNING" : "❚❚ PAUSED"}
          </div>
        </div>

        {/* Mode Indicators at bottom of screen */}
        <div className="w-full flex justify-between mt-2 z-10">
          <div
            className={`text-[8px] text-gb-pixel ${
              mode === "pomodoro"
                ? "bg-gb-pixel text-gb-screen px-1"
                : "opacity-50"
            }`}
          >
            POMO
          </div>
          <div
            className={`text-[8px] text-gb-pixel ${
              mode === "shortBreak"
                ? "bg-gb-pixel text-gb-screen px-1"
                : "opacity-50"
            }`}
          >
            SHORT
          </div>
          <div
            className={`text-[8px] text-gb-pixel ${
              mode === "longBreak"
                ? "bg-gb-pixel text-gb-screen px-1"
                : "opacity-50"
            }`}
          >
            LONG
          </div>
        </div>
      </div>
    </div>
  );
};
