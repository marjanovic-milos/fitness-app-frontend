import React from "react";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import CreateMembership from "./createMembership";
import { createMembership, getUserMemberships } from "src/http/api/memberships";
import { IdCard } from "lucide-react";

const MembershipList = ({ userId, clientData }) => {
  const columns = ["Expiry Date", "Count", "Price", "Active", "Created At"];

  return (
    <div className="">
      <CoreTableComponent
        columns={columns}
        queryFn={() => getUserMemberships({ filter: { userId } })}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={createMembership}
        createForm={CreateMembership}
        queryKey={["userMemberships", userId]}
        buttonText={"Add New"}
        heading={`${clientData?.name} memberships `}
        icon={IdCard}
        modalName={"memberships-form"}
      />
    </div>
  );
};

export default MembershipList;
