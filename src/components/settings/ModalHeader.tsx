import React from "react";
import { X } from "lucide-react";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

/**
 * Modal header component
 */
export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="bg-[#0f380f] text-[#9bbc0f] px-4 py-2 flex justify-between items-center mb-4">
      <h2 className="text-xs tracking-widest uppercase">{title}</h2>
      <button onClick={onClose} className="hover:text-white">
        <X size={16} />
      </button>
    </div>
  );
};
