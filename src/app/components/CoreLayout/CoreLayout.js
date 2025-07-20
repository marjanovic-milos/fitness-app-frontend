import { useContext } from "react";
import CoreFooter from "../CoreFooter/CoreFooter";
import CoreHeader from "../CoreHeader/CoreHeader";
import CoreNavigation from "../CoreNavigation/CoreNavigation";
import { ThemeContext } from "@/app/context/theme";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
const CoreLayout = ({ children }) => {
  const { dark } = useContext(ThemeContext);
  const styles = dark ? "core-layout-dark" : "core-layout";

  return (
    <div className={styles}>
      <CoreHeader />
      <main className='relative flex'>{children}</main>
      <CoreFooter />
      <MobileNavigation />
    </div>
  );
};

export default CoreLayout;
