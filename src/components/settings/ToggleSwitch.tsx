import React from "react";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

/**
 * Toggle switch component for settings
 */
export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={() => onChange(!checked)}
    >
      <h3 className="text-xs uppercase">{label}</h3>
      <div
        className={`w-4 h-4 border-2 border-[#0f380f] flex items-center justify-center ${
          checked ? "bg-[#0f380f]" : "bg-[#9bbc0f]"
        }`}
      >
        {checked && <div className="w-2 h-2 bg-[#9bbc0f]"></div>}
      </div>
    </div>
  );
};
