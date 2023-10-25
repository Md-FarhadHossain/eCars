import React from "react";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

const MenuBar = () => {
  const menus = [
    { label: "All Cars" },
    { label: "About Us" },
    { label: "Blog" },
    { label: "Contact" },
  ];
  return (
    <Sheet>
      <SheetTrigger>
        <div className="lg:hidden md:block block md:mr-8 mr-4">
          <Menu />
        </div>
      </SheetTrigger>

      {/* Shhet content */}
      <SheetContent side="left">
        <SheetHeader>
          {/* Logo */}
          <div className="text-3xl font-bold border-b pb-4">
            <span className="text-[#00a419]">e</span>Cars
          </div>
        </SheetHeader>

        <SheetDescription>
          {/* Menu Links */}
          <ul className="mt-4 text-lg">
            {menus.map((menu) => (
              <li className="ml-8 font-semibold py-4" key={menu.label}>
                <Link href="/">{menu.label}</Link>
              </li>
            ))}
          </ul>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MenuBar;
