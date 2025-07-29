import React from "react";
import Link from "next/link";
import { Calendar, User, Soup, Dumbbell } from "lucide-react";

const CoreBreadcrumbs = () => {
  return (
    <div className='core-breadcrumbs'>
      <Link href='/' className='core-breadcrumb-item'>
        <Calendar className='w-4 h-4' strokeWidth={1} />
        Calendar
      </Link>
      <Link href='/' className='core-breadcrumb-item'>
        <User className='w-4 h-4' strokeWidth={1} />
        Users
      </Link>
      <Link href='/' className='core-breadcrumb-item'>
        <Soup className='w-4 h-4' strokeWidth={1} />
        Meals
      </Link>
      <Link href='/' className='core-breadcrumb-item'>
        <Dumbbell className='w-4 h-4' strokeWidth={1} />
        Excercises
      </Link>
    </div>
  );
};

export default CoreBreadcrumbs;
