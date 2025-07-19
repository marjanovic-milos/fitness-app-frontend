import React from "react";

const CoreButton = (props) => {
  const { classes } = props;
  const rootInput = `core-button ${classes?.root ? classes.root : ""}`;

  return <div className={rootInput}>{props.children}</div>;
};

export default CoreButton;
