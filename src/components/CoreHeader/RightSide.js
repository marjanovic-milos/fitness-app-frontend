import React from "react";

import { Bell } from "lucide-react";
import Link from "next/link";

const RightSide = () => {
  return (
    <div>
      <div className='flex items-center'>
        {/* <div className="w-10 h-10 rounded-full flex items-center justify-center  border-1 border-gray-100 cursor-pointer">
          <Bell className="w-6 h-6" strokeWidth={1.5} />
        </div> */}
        <Link href='/profile' className='flex items-center mx-4 xl:block hidden'>
          <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='User Profile' className='w-10 h-10 rounded-full  object-cover' />
        </Link>
      </div>
    </div>
  );
};

export default RightSide;
