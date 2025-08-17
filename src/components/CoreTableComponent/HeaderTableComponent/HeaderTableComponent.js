import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import CoreHeading from "../../CoreHeading/CoreHeading";
import CoreButton from "../../CoreButton/CoreButton";

const CoreSubnavigation = (props) => {
  const { heading, button, setCreateForm } = props;
  return (
    <div className="core-subnavigation">
      <CoreHeading type="h2" className="font-semibold">
        {heading}
      </CoreHeading>
      <CoreButton onClick={setCreateForm} icon={Plus}>
        {button}
      </CoreButton>
    </div>
  );
};

export default CoreSubnavigation;
