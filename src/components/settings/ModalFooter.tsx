import React from "react";

interface ModalFooterProps {
  onSave: () => void;
}

/**
 * Modal footer component
 */
export const ModalFooter: React.FC<ModalFooterProps> = ({ onSave }) => {
  return (
    <div className="px-4 py-4 flex justify-end mt-4">
      <button
        onClick={onSave}
        className="bg-[#0f380f] text-[#9bbc0f] text-xs uppercase py-3 px-6 hover:bg-[#2d2d2d] transition-colors border-2 border-transparent hover:border-[#9bbc0f]"
      >
        Save Changes
      </button>
    </div>
  );
};
