import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";

const CoreText = (props) => {
  const { children, className } = props;
  const { dark } = useContext(ThemeContext);
  const styles = `${dark ? "core-text-dark" : "core-text"} ${className}`;

  return <p className={styles}>{children}</p>;
};

export default CoreText;
