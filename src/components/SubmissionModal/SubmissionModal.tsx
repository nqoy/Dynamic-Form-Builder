import React, { useEffect, useRef } from "react";
import "./SubmissionModal.css";
import '../../styles/animations.css'

interface SubmissionModalProps {
  data: Record<string, unknown>;
  onClose: () => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ data, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop fade-in">
      <div className="submission-modal slide-in" ref={modalRef}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Submission Summary</h2>

        <div className="submission-content">
          {Object.entries(data).map(([label, value]) => (
            <div className="submission-field" key={label}>
              <strong>{label}:</strong>
              <span>{String(value)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubmissionModal;
