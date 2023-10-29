import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import SpecialOffersCars from "./SpecialOffersCars";

const SpecialOffers = () => {
  return (
    <section>
      {/* Top section */}
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="text-4xl font-bold">Special offers</h1>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 text-gray-600">
            <ChevronLeft size={20} className="cursor-pointer hover:text-black transition" />
            <ChevronRight size={20} className="cursor-pointer hover:text-black transition" />
          </div>

          <div className="flex items-center gap-1 text-[#00a419]">
            <p className="font-semibold">See all cars</p>
            <p><ArrowRight size={20} /></p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container overflow-x-hidden">
        <SpecialOffersCars /> 
      </div>
    </section>
  );
};

export default SpecialOffers;
