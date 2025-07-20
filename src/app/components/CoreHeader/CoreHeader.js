import React, { useContext } from "react";
import CoreMenu from "../CoreMenu/CoreMenu";
import { ThemeContext } from "@/app/context/theme";

import { Bell } from "lucide-react";
import Link from "next/link";
const CoreHeader = () => {
  const { dark } = useContext(ThemeContext);
  const styles = dark ? "core-header-dark" : "core-header";

  return (
    <nav className={styles}>
      <CoreMenu />
      <div className='flex items-center'>
        <Link href='/client/profile' className='flex items-center mx-4'>
          <img src='https://randomuser.me/api/portraits/men/32.jpg' alt='User Profile' className='w-10 h-10 rounded-full  object-cover' />
        </Link>
        {/* <Link href='/client' className='flex items-center mx-2'> */}
        <div className='w-10 h-10 rounded-full flex items-center justify-center  border-1 border-gray-100 cursor-pointer'>
          <Bell className='w-6 h-6' strokeWidth={1.5} />
        </div>
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default CoreHeader;
