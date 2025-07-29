import { useContext } from "react";
import { ThemeContext } from "src/context/theme";

const CoreLayout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  const styles = dark ? "core-layout-dark" : "core-layout";

  return <main className={styles}>{children}</main>;
};

export default CoreLayout;
