import React from "react";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import Membership from "./membership";
import { createMembership, getUserMemberships } from "src/http/api/memberships";
import { IdCard } from "lucide-react";
const MembershipList = ({ params }) => {
  const columns = [
    "Expiry Date",
    "Count",
    "Price",
    "Active",
    "Created At",
    "Actions",
  ];

  //TODO
  // Check if user belongs to admin

  return (
    <div>
      <CoreTableComponent
        columns={columns}
        queryFn={() =>
          getUserMemberships({ filter: { userId: params.userId } })
        }
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={createMembership}
        createForm={Membership}
        queryKey={"userMemberships"}
        buttonText={"Add New"}
        heading={"List of memberships"}
        icon={IdCard}
      />
    </div>
  );
};

export default MembershipList;
