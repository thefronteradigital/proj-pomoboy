import React from "react";

interface TimerInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

/**
 * Timer input field component
 */
export const TimerInput: React.FC<TimerInputProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center">
      <label className="text-xs uppercase">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-20 bg-[#8bac0f] border-2 border-[#0f380f] p-1 text-right focus:outline-none focus:bg-[#9bbc0f]"
      />
    </div>
  );
};
