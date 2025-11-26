import React from "react";

interface StartSelectButtonsProps {
  onSelect: () => void;
  onStart: () => void;
}

/**
 * Start/Select buttons component
 */
export const StartSelectButtons: React.FC<StartSelectButtonsProps> = ({
  onSelect,
  onStart,
}) => {
  return (
    <div className="flex justify-center gap-6 mt-12 transform -rotate-12">
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={onSelect}
          className="w-12 h-3 bg-gb-dark rounded-full shadow-[1px_1px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[1px] hover:bg-black"
        ></button>
        <span className="text-[10px] font-bold text-gb-dark tracking-widest">
          SELECT
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button
          onClick={onStart}
          className="w-12 h-3 bg-gb-dark rounded-full shadow-[1px_1px_0_rgba(0,0,0,0.2)] active:shadow-none active:translate-y-[1px] hover:bg-black"
        ></button>
        <span className="text-[10px] font-bold text-gb-dark tracking-widest">
          START
        </span>
      </div>
    </div>
  );
};
