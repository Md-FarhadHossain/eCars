import { Search, Heart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MenuBar from "./MenuBar";
import SerarchBar from "./SearchBar";

const NavBar = () => {
  const menus = [
    { label: "All Cars" },
    { label: "About Us" },
    { label: "Blog" },
    { label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex justify-between items-center py-4 container">
        {/* Nav right side */}

        <div className="flex items-center">
          {/* Hamburger */}

          <MenuBar />
          {/* Logo */}
          <div className="text-3xl font-bold">
            <span className="text-[#00a419]">e</span>Cars
          </div>

          {/* Menu Links */}
          <ul className="lg:flex md:hidden hidden">
            {menus.map((menu) => (
              <li className="ml-8 font-semibold" key={menu.label}>
                <Link href="/">{menu.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Nav right side */}
        <div className="flex items-center">
          <ul className="flex items-center">
            <li className="mr-4">
              <SerarchBar />
            </li>
            <li className="mr-4 lg:block md:block hidden">
              <Heart />
            </li>
            <li className="mr-8 lg:block md:block hidden">
              <UserCircle2 />
            </li>
          </ul>

          <Button variant="primary">Get a quote</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
