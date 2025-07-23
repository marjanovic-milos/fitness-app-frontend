"use client";
import React from "react";
import Link from "next/link";
import { Home, Banknote } from "lucide-react";

const CoreMenu = () => {
  return (
    <div className='core-menu'>
      <Link href='/client' className='core-menu-item'>
        <Home className='w-5 h-5' strokeWidth={1.5} />
        <p className='font-display'>Dashboard</p>
      </Link>
      <Link href='/client' className={"core-menu-item"}>
        <Banknote className='w-5 h-5' strokeWidth={1.5} />
        <span className='text-md cursor-pointer mx-1'>Billings</span>{" "}
      </Link>
    </div>
  );
};

export default CoreMenu;
