import React from "react";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";

const MembershipList = () => {
  const columns = [];
  return (
    <div>
      <CoreTableComponent
        columns={columns}
        queryFn={() => {}}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={() => {}}
        createForm={null}
        queryKey={"memberships"}
        buttonText={"Add Membership"}
        heading={"List of memberships"}
        icon={null}
      />
    </div>
  );
};

export default MembershipList;
