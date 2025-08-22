import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";

const CoreHeading = (props) => {
  const { children, className, type, icon } = props;
  const { dark } = useContext(ThemeContext);
  const styles = `${dark ? "core-heading-dark" : "core-heading"} ${className}`;
  const Tag = type || "h1";
  const Icon = icon;
  return (
    <div className='core-center gap-2'>
      {icon && (
        <div className={`${dark ? "bg-gray-300 text-gray-800" : "bg-gray-100 text-gray-500"} rounded-full p-1`}>
          <Icon className='w-5 h-5' strokeWidth={2} />
        </div>
      )}
      <Tag className={styles}>{children}</Tag>
    </div>
  );
};

export default CoreHeading;
