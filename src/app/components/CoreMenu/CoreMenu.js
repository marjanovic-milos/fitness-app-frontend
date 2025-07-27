"use client";
import React from "react";
import Link from "next/link";
import { Banknote, User, Dumbbell, Soup, Home } from "lucide-react";

const CoreMenu = () => {
  return (
    <div className='core-menu'>
      <img
        src='https://www.vhv.rs/dpng/d/427-4273719_random-logo-transparent-background-hd-png-download.png'
        alt='User Profile'
        className='w-10 h-10 rounded-full  object-cover'
      />

      <div className='core-menu-links'>
        <Link href='/client' className='core-menu-item'>
          <Home className='w-5 h-5' strokeWidth={1.5} />
          <p className=''>Dashboard</p>
        </Link>
        <Link href='/client' className={"core-menu-item"}>
          <Banknote className='w-5 h-5' strokeWidth={1.5} />
          <span className=''>Billings</span>{" "}
        </Link>
        <Link href='/client' className={"core-menu-item"}>
          <Banknote className='w-5 h-5' strokeWidth={1.5} />
          <span className=''>Billings</span>{" "}
        </Link>
        <Link href='/client' className={"core-menu-item"}>
          <Banknote className='w-5 h-5' strokeWidth={1.5} />
          <span className=''>Billings</span>{" "}
        </Link>
        <Link href='/client' className={"core-menu-item"}>
          <Banknote className='w-5 h-5' strokeWidth={1.5} />
          <span className=''>Billings</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default CoreMenu;
