"use client";
import React from "react";

const CoreModal = ({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6">
        {/* Header */}
        {title && (
          <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
        )}

        {/* Body */}
        <div className="mb-6">{children}</div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              onCancel();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoreModal;
