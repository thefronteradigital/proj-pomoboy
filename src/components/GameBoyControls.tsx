import React from "react";
import { DPad } from "./DPad";
import { ActionButtons } from "./ActionButtons";
import { StartSelectButtons } from "./StartSelectButtons";
import { SpeakerGrille } from "./SpeakerGrille";

interface GameBoyControlsProps {
  onPrevMode: () => void;
  onNextMode: () => void;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onOpenSettings: () => void;
}

/**
 * GameBoy controls area component
 */
export const GameBoyControls: React.FC<GameBoyControlsProps> = ({
  onPrevMode,
  onNextMode,
  onToggleTimer,
  onResetTimer,
  onOpenSettings,
}) => {
  return (
    <div className="w-full flex-1 relative">
      {/* Main Controls Grid */}
      <div className="grid grid-cols-2 h-32 mt-4">
        {/* D-Pad */}
        <DPad onLeft={onPrevMode} onRight={onNextMode} />

        {/* A/B Buttons */}
        <ActionButtons onA={onToggleTimer} onB={onResetTimer} />
      </div>

      {/* Start / Select */}
      <StartSelectButtons onSelect={onOpenSettings} onStart={onToggleTimer} />

      {/* Speaker Grille */}
      <SpeakerGrille />
    </div>
  );
};
