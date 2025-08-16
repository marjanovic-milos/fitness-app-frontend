import { createContext, useContext, useState, useCallback } from "react";
import { TriangleAlert } from "lucide-react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = useCallback((message, type = "error") => {
    setAlert({ message, type });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <div
          className={`fixed bottom-20 right-20 p-5 h-[50px] rounded-lg shadow-lg text-white transition-opacity duration-500 flex items-center bg-slate-900`}
        >
          <TriangleAlert className='w-5 h-5 mx-2' strokeWidth={1.5} />
          {alert.message}
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
