import React from "react";

const CoreButton = (props) => {
  const { classes } = props;
  const rootInput = `core-button ${classes?.root ? classes.root : ""}`;

  return <button className={rootInput}>{props.children}</button>;
};

export default CoreButton;
