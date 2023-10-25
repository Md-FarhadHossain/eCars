import { Search } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Search />
      </SheetTrigger>

      <SheetContent className="lg:px-28 md:px-28 px-5" side="top">
        {/* <SheetHeader>Hellow</SheetHeader> */}
        <SheetDescription>
          <div className="flex items-center">
            <Input placeholder="Search" />
            <div className="relative right-8">
              <Search />
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default SearchBar;
