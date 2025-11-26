import React from "react";

interface ActionButtonsProps {
  onA: () => void;
  onB: () => void;
}

/**
 * A/B action buttons component
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({ onA, onB }) => {
  return (
    <div className="relative flex items-center justify-center pl-4">
      <div className="bg-gray-200/50 rounded-full w-[110px] h-[60px] transform -rotate-12 flex justify-between items-center px-2">
        <div className="flex flex-col items-center gap-1 mt-6">
          <button
            onClick={onB}
            className="w-10 h-10 bg-gb-red rounded-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-transform"
          ></button>
          <span className="text-gb-dark font-bold text-xs">B</span>
        </div>
        <div className="flex flex-col items-center gap-1 mb-6">
          <button
            onClick={onA}
            className="w-10 h-10 bg-gb-red rounded-full shadow-[2px_2px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-transform"
          ></button>
          <span className="text-gb-dark font-bold text-xs">A</span>
        </div>
      </div>
    </div>
  );
};

