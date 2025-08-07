import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";

const CoreHeading = (props) => {
  const { children, className, type } = props;
  const { dark } = useContext(ThemeContext);
  const styles = `${dark ? "core-heading-dark" : "core-heading"} ${className}`;
  const Tag = type || "h1";

  return <Tag className={styles}>{children}</Tag>;
};

export default CoreHeading;
