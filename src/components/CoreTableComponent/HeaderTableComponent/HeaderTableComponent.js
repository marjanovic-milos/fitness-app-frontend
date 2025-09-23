import React from "react";
import { Plus } from "lucide-react";
import CoreHeading from "../../CoreHeading/CoreHeading";
import CoreButton from "../../CoreButton/CoreButton";
import { useModals } from "src/context/modal";
const HeaderTableComponent = (props) => {
  const { heading, button, icon, modalName } = props;
  const { toggleModal } = useModals();
  return (
    <div className="core-subnavigation">
      <div className="flex items-center gap-2">
        <CoreHeading type="h2" className="font-semibold" icon={icon}>
          {heading}
        </CoreHeading>
      </div>
      {button && (
        <CoreButton onClick={() => toggleModal(modalName)} icon={Plus}>
          {button}
        </CoreButton>
      )}
    </div>
  );
};

export default HeaderTableComponent;
