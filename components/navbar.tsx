"use client";

import { motion } from "motion/react";
import { CloudHubLogo, Hamburger } from "./svg";
import React from "react";
import { cn } from "@/lib/util/cn";

export const Navbar = () => {
  const [isHamburger, setIsHamburger] = React.useState<boolean>(false);
  return (
    <nav className="flex items-center h-20  justify-between gap-7  ml-4 ">
      <div className="flex gap-20 items-center">
        {/* logo */}
        <CloudHubLogo />
        {/* list of nav */}
        <div className="md:block hidden">
          <ul className="flex gap-5">
            <li>Product</li>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
          </ul>
        </div>
      </div>

      {/* authentication options */}
      <div className="flex gap-4 hidden md:block ">
        <button>Login</button>
        <button className="bg-[#FB432C] rounded-[39px] w-31.75 h-11 text-white mx-2">
          Start for free
        </button>
      </div>

      {/* mobile nav */}
      <div
        className={cn(
          "block md:hidden",
          isHamburger && "rotate-180 transition-all",
        )}
        onClick={() => setIsHamburger((prev) => !prev)}
      >
        <Hamburger />
      </div>
      {isHamburger && (
        <div className="h-fit bg-white w-full absolute top-15 ">
          <ul className="flex flex-col gap-5 p-5">
            <li>Product</li>
            <li>Home</li>
            <li>Shop</li>
            <li>Pages</li>
          </ul>
        </div>
      )}
    </nav>
  );
};
