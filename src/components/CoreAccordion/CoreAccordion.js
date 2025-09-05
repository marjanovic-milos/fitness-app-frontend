import { useState, useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeContext } from "src/context/theme";

const CoreAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`w-full shadow-md transition-colors ${
        dark ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-4 py-3 text-left font-medium focus:outline-none cursor-pointer "
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 px-4 pb-4" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default CoreAccordion;
