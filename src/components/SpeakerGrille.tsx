import React from "react";

/**
 * Speaker grille decoration component
 */
export const SpeakerGrille: React.FC = () => {
  return (
    <div className="absolute bottom-[-10px] right-2 transform -rotate-12 flex gap-2">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-[6px] h-[40px] bg-black/10 rounded-full"
        ></div>
      ))}
    </div>
  );
};

