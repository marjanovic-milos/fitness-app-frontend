import React, { useEffect, useState } from "react";

const CoreModal = ({ isOpen, onClose, children, heading }) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  if (!show) return null;

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${animate ? "opacity-50" : "opacity-0"}`} />

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] h-screen max-h-[95%] bg-white rounded-t-3xl shadow-xl z-50
          transform transition-all duration-300 ${animate ? "translate-y-[5%] opacity-100" : "translate-y-full opacity-0"}`}
      >
        {heading ? (
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold'>Modal Title</h2>
            <button onClick={onClose} className='text-gray-500 hover:text-gray-800 text-2xl z-99'>
              ✕
            </button>
          </div>
        ) : (
          <button onClick={onClose} className='absolute top-10 right-10 text-white text-2xl z-99'>
            ✕
          </button>
        )}

        <div className={`${heading ? "overflow-y-auto" : "overflow-y-hidden"} h-full`}>{children}</div>
      </div>
    </>
  );
};

export default CoreModal;
