"use client";
import React from "react";

import { Home, Bell, Calendar, User } from "lucide-react";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className='core-mobile-navigation'>
      <Link href='/client' className='flex justify-center'>
        <Home className='w-6 h-6' strokeWidth={1.5} />
      </Link>
      <Link href='/client' className='flex justify-center'>
        <Calendar className='w-6 h-6' strokeWidth={1.5} />
      </Link>{" "}
      <Link href='/client' className='flex justify-center'>
        <Bell className='w-6 h-6' strokeWidth={1.5} />
      </Link>{" "}
      <Link href='/client' className='flex justify-center'>
        <User className='w-6 h-6' strokeWidth={1.5} />
      </Link>
    </div>
  );
};

export default MobileNavigation;
