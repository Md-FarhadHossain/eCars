import { Briefcase, MessagesSquare, ShieldCheck } from "lucide-react";
import React from "react";

const CompnaySummary = () => {
  return (
   <div className="container mx-auto relative -top-20">
     <div className="p-10 bg-white shadow-xl rounded-2xl flex justify-between items-center">


      {/* Professional approach to clients */}
      <div className="flex items-center">
        <div className="bg-yellow-500 p-4 rounded-full mr-4">
          <Briefcase />
        </div>
        <div>
            <h1 className="text-base font-bold mb-2">Professional approach to clients</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
      </div>


      {/* Protect all payments */}
      <div className="flex items-center px-10">
      <div className="bg-yellow-500 p-4 rounded-full mr-4">
          <ShieldCheck />
        </div>
        <div>
            <h1 className="text-base font-bold mb-2">Protect all payments</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
      </div>


      {/* Real reviews from clients */}
      <div className="flex items-center">
      <div className="bg-yellow-500 p-4 rounded-full mr-4">
      <MessagesSquare />
        </div>
        <div>
            <h1 className="text-base font-bold mb-2">Real reviews from clients</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
      </div>


    </div>
   </div>
  );
};

export default CompnaySummary;
