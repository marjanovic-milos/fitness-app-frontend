import React from "react";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import Membership from "./membership";
import { createMembership, getUserMemberships } from "src/http/api/memberships";
import { IdCard } from "lucide-react";

const MembershipList = ({ userId, clientData }) => {
  const columns = ["Expiry Date", "Count", "Price", "Active", "Created At"];

  return (
    <div className="bg-[var(--color-secondary)]">
      <CoreTableComponent
        columns={columns}
        queryFn={() => getUserMemberships({ filter: { userId } })}
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={createMembership}
        createForm={Membership}
        queryKey={["userMemberships", userId]}
        buttonText={"Add New"}
        heading={`${clientData?.name} memberships `}
        icon={IdCard}
/>
    </div>
  );
};

export default MembershipList;
