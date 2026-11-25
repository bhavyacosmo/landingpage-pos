import React from "react";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";

interface BookDemoModalProps {
  isOpen: boolean;
  context?: string;
  onClose: () => void;
}

export const BookDemoModal: React.FC<BookDemoModalProps> = ({
  isOpen,
  context,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full rounded-[24px] bg-white text-[#0f0f0f] p-7 sm:p-10 shadow-2xl max-h-[94vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f4f3f1] hover:bg-[#ecfdf5] text-[#0f0f0f] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <LeadForm key={String(isOpen)} context={context} onDone={onClose} />
      </div>
    </div>
  );
};
