import React from "react";
import CoreTableComponent from "src/components/CoreTableComponent/CoreTableComponent";
import Membership from "./membership";
import { createMembership, getUserMemberships } from "src/http/api/memberships";
const MembershipList = () => {
  const columns = ["Price", "Active", "Expiry Date", "Count", "Created At"];
  return (
    <div>
      <CoreTableComponent
        columns={columns}
        queryFn={() =>
          getUserMemberships({ filter: { userId: "68c6d89ff746455a115b4b53" } })
        }
        deleteFn={() => {}}
        updateFn={() => {}}
        createFn={createMembership}
        createForm={Membership}
        queryKey={"userMemberships"}
        buttonText={"Add Membership"}
        heading={"List of memberships"}
        icon={null}
      />
    </div>
  );
};

export default MembershipList;
