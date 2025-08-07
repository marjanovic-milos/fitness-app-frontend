import React, { useContext } from "react";
import { ThemeContext } from "src/context/theme";
const CoreCard = (props) => {
  const { dark } = useContext(ThemeContext);

  const styles = `${dark ? "core-card-dark" : "core-card"} ${props.className}`;
  return (
    <div className={styles} {...props}>
      {props.children}
    </div>
  );
};

export default CoreCard;
