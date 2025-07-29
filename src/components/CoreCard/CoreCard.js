import React from "react";

const CoreCard = (props) => {
  const styles = `core-card ${props.className}`;
  return (
    <div className={styles} {...props}>
      {props.children}
    </div>
  );
};

export default CoreCard;
