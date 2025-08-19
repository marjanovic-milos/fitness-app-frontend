import React, { useEffect, useState } from "react";

const CoreModal = ({ isOpen, onClose, children }) => {
  const [show, setShow] = useState(false); // keeps modal mounted
  const [animate, setAnimate] = useState(false); // controls animation

  // Handle open/close
  useEffect(() => {
    if (isOpen) {
      setShow(true); // mount modal
      setTimeout(() => setAnimate(true), 10); // trigger opening animation
    } else {
      setAnimate(false); // start closing animation
      const timer = setTimeout(() => setShow(false), 300); // unmount after animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${animate ? "opacity-50" : "opacity-0"}`} />

      {/* Modal Content */}
      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] h-screen max-h-[95%] bg-white rounded-t-3xl shadow-xl p-8 z-50
          transform transition-all duration-300 ${animate ? "translate-y-[5%] opacity-100" : "translate-y-full opacity-0"}`}
      >
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-semibold'>Modal Title</h2>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-800 text-2xl'>
            ✕
          </button>
        </div>

        {/* Body */}
        <div className='overflow-y-auto h-full'>{children}</div>
      </div>
    </>
  );
};

export default CoreModal;
