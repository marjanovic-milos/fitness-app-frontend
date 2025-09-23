import React from "react";
import Link from "next/link";

const RightSide = () => {
  return (
    <div className="flex items-center justify-between lg:w-fit w-full">
      <img
        src="https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png"
        alt=""
        className="w-10 h-10 rounded-full  object-cover lg:hidden block"
      />

      <Link href="/profile" className="flex items-center mx-4 ">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Profile"
          className="w-10 h-10 rounded-full  object-cover"
        />
      </Link>
    </div>
  );
};

export default RightSide;
