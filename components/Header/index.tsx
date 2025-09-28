"use client";

import { useState } from "react";

import { _siteDetails } from "@/lib/config";

import MenuLink from "./MenuLink";
import { Navbar } from "./NavBar";
import Logo from "../ui/Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <header className="h-16 pxm py-4 bg-light w-full flexBetween z-20">
      <Logo />


      <div className="w-[24rem] hidden md:flexBetween">
        {_siteDetails.menuLinks.map((item) => (
          <MenuLink key={item.link} {...item} />
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={toggleOpen} className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && <Navbar />}
    </header>
  );
}
