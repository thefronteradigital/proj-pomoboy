import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Settings } from "@/types";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: Settings;
  onSave: (newSettings: Settings) => void;
}

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

  const handleChange = (key: keyof Settings, value: any) => {
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
        {/* Header */}
        <div className="bg-[#0f380f] text-[#9bbc0f] px-4 py-2 flex justify-between items-center mb-4">
          <h2 className="text-xs tracking-widest uppercase">Configuration</h2>
          <button onClick={onClose} className="hover:text-white">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-2 space-y-6 text-[#0f380f]">
          {/* Timer Settings */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase border-b-2 border-[#0f380f] pb-2 mb-4">
              Timers (MIN)
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase">Pomodoro</label>
                <input
                  type="number"
                  value={localSettings.pomodoro}
                  onChange={(e) => handleChange('pomodoro', Number(e.target.value))}
                  className="w-20 bg-[#8bac0f] border-2 border-[#0f380f] p-1 text-right focus:outline-none focus:bg-[#9bbc0f]"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase">Short Break</label>
                <input
                  type="number"
                  value={localSettings.shortBreak}
                  onChange={(e) => handleChange('shortBreak', Number(e.target.value))}
                  className="w-20 bg-[#8bac0f] border-2 border-[#0f380f] p-1 text-right focus:outline-none focus:bg-[#9bbc0f]"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-xs uppercase">Long Break</label>
                <input
                  type="number"
                  value={localSettings.longBreak}
                  onChange={(e) => handleChange('longBreak', Number(e.target.value))}
                  className="w-20 bg-[#8bac0f] border-2 border-[#0f380f] p-1 text-right focus:outline-none focus:bg-[#9bbc0f]"
                />
              </div>
            </div>

            <div className="border-t-2 border-[#0f380f] border-dashed my-4"></div>

            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleChange('autoStartBreaks', !localSettings.autoStartBreaks)}
            >
              <h3 className="text-xs uppercase">Auto Start Breaks</h3>
              <div
                className={`w-4 h-4 border-2 border-[#0f380f] flex items-center justify-center ${
                  localSettings.autoStartBreaks ? 'bg-[#0f380f]' : 'bg-[#9bbc0f]'
                }`}
              >
                {localSettings.autoStartBreaks && <div className="w-2 h-2 bg-[#9bbc0f]"></div>}
              </div>
            </div>

            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() =>
                handleChange('autoStartPomodoros', !localSettings.autoStartPomodoros)
              }
            >
              <h3 className="text-xs uppercase">Auto Start Pomo</h3>
              <div
                className={`w-4 h-4 border-2 border-[#0f380f] flex items-center justify-center ${
                  localSettings.autoStartPomodoros ? 'bg-[#0f380f]' : 'bg-[#9bbc0f]'
                }`}
              >
                {localSettings.autoStartPomodoros && (
                  <div className="w-2 h-2 bg-[#9bbc0f]"></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-4 flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-[#0f380f] text-[#9bbc0f] text-xs uppercase py-3 px-6 hover:bg-[#2d2d2d] transition-colors border-2 border-transparent hover:border-[#9bbc0f]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

