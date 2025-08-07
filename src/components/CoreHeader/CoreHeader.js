import React from "react";
import CoreNavigation from "../CoreNavigation/CoreNavigation";

import { Bell } from "lucide-react";
import Link from "next/link";
const CoreHeader = () => {
  return (
    <nav className={`core-header`}>
      <CoreNavigation />
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center  border-1 border-gray-100 cursor-pointer">
          <Bell className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <Link href="/profile" className="flex items-center mx-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Profile"
            className="w-10 h-10 rounded-full  object-cover"
          />
        </Link>
      </div>
    </nav>
  );
};

export default CoreHeader;
