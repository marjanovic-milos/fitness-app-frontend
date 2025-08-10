import React from "react";

const CoreButton = (props) => {
  const { className, type, icon } = props;
  const rootInput = `core-button ${className?.root ? className.root : ""}`;

  const Icon = icon;

  return (
    <button className={rootInput} {...props}>
      {icon && (
        <div className='flex items-center justify-center bg-gray-700 rounded-full w-7 h-7 '>
          <Icon className='w-4 h-4' strokeWidth={1.5} />
        </div>
      )}
      {props.children}
    </button>
  );
};

export default CoreButton;
