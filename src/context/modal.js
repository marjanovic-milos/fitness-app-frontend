"use client";
import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = (name) => setModals((prev) => ({ ...prev, [name]: true }));

  const closeModal = (name) =>
    setModals((prev) => ({ ...prev, [name]: false }));

  const toggleModal = (name) =>
    setModals((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <ModalContext.Provider
      value={{ modals, openModal, closeModal, toggleModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used inside ModalProvider");
  }
  return context;
};
