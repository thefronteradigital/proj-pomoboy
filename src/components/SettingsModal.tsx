import React, { useState, useEffect } from "react";
import type { Settings } from "@/types";
import { ModalHeader } from "./settings/ModalHeader";
import { ModalFooter } from "./settings/ModalFooter";
import { TimerInput } from "./settings/TimerInput";
import { ToggleSwitch } from "./settings/ToggleSwitch";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSave: (newSettings: Settings) => void;
}

/**
 * Settings modal component
 */
export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const [localSettings, setLocalSettings] = useState<Settings>(settings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings, isOpen]);

  const handleChange = (key: keyof Settings, value: number | boolean) => {
    setLocalSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = () => {
    onSave(localSettings);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#9bbc0f] border-4 border-[#0f380f] w-full max-w-md p-1 shadow-[8px_8px_0px_rgba(0,0,0,0.5)] transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader title="Configuration" onClose={onClose} />

        {/* Body */}
        <div className="px-4 py-2 space-y-6 text-[#0f380f]">
          {/* Timer Settings */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase border-b-2 border-[#0f380f] pb-2 mb-4">
              Timers (MIN)
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <TimerInput
                label="Pomodoro"
                value={localSettings.pomodoro}
                onChange={(value) => handleChange("pomodoro", value)}
              />
              <TimerInput
                label="Short Break"
                value={localSettings.shortBreak}
                onChange={(value) => handleChange("shortBreak", value)}
              />
              <TimerInput
                label="Long Break"
                value={localSettings.longBreak}
                onChange={(value) => handleChange("longBreak", value)}
              />
            </div>

            <div className="border-t-2 border-[#0f380f] border-dashed my-4"></div>

            <ToggleSwitch
              label="Auto Start Breaks"
              checked={localSettings.autoStartBreaks}
              onChange={(checked) => handleChange("autoStartBreaks", checked)}
            />

            <ToggleSwitch
              label="Auto Start Pomo"
              checked={localSettings.autoStartPomodoros}
              onChange={(checked) =>
                handleChange("autoStartPomodoros", checked)
              }
            />
          </div>
        </div>

        <ModalFooter onSave={handleSave} />
      </div>
    </div>
  );
};
