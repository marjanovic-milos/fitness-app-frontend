import React from "react";
import Link from "next/link";
import { Home, Banknote } from "lucide-react";

const CoreMenu = () => {
  return (
    <div className="flex">
      <Link href="/client" className="flex items-center mx-2">
        <Home className="w-5 h-5" strokeWidth={1.5} />
        <p className="font-display">Dashboard</p>{" "}
      </Link>
      <Link href="/client" className="flex items-center mx-2">
        <Banknote className="w-5 h-5" strokeWidth={1.5} />
        <span className="text-md cursor-pointer mx-1">Billings</span>{" "}
      </Link>
    </div>
  );
};

export default CoreMenu;
