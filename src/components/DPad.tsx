import React from "react";

interface DPadProps {
  onLeft: () => void;
  onRight: () => void;
}

/**
 * D-Pad control component
 */
export const DPad: React.FC<DPadProps> = ({ onLeft, onRight }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-[90px] h-[90px] relative">
        {/* Horizontal */}
        <div className="absolute top-[30px] left-0 w-full h-[30px] bg-gb-dark rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.2)]"></div>
        {/* Vertical */}
        <div className="absolute top-0 left-[30px] w-[30px] h-full bg-gb-dark rounded-sm shadow-[2px_2px_0_rgba(0,0,0,0.2)]"></div>

        {/* Middle Circle */}
        <div className="absolute top-[35px] left-[35px] w-[20px] h-[20px] bg-gb-dark/80 rounded-full radial-gradient"></div>

        {/* Click Areas */}
        <button
          onClick={onLeft}
          className="absolute top-[30px] left-0 w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5"
          aria-label="Previous Mode"
        />
        <button
          onClick={onRight}
          className="absolute top-[30px] right-0 w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5"
          aria-label="Next Mode"
        />
        <button className="absolute top-0 left-[30px] w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5" />
        <button className="absolute bottom-0 left-[30px] w-[30px] h-[30px] active:scale-95 active:bg-black/50 hover:bg-white/5" />
      </div>
    </div>
  );
};

