import Image from "next/image";
import React from "react";
import hero from "../../public/hero-image.png";
import { Button } from "../ui/button";
import { Mail, PhoneCall } from "lucide-react";

const HeroSection = () => {
  return (
    <section>
      <Image
        className="w-full pointer-events-none"
        src={hero}
        alt="hero iamge"
      ></Image>
      <div className="container mx-auto px-4">
        <div className="absolute top-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-semibold leading-tight">
            Car import services <br /> with delivery to <br /> your doorstep.
          </h1>

          {/* Title bottom section */}
          <div className="flex items-center mt-8 justify-between ">
            <div>
            <Button
              size="lg"
              variant="primary"
              className="font-semibold text-base"
            >
              Get a quote
            </Button>
            </div>

            <div className="flex items-center">
              <PhoneCall />
              <span className="ml-2 font-semibold text-gray-700">+971 55 811 9024</span>
            </div>

            <div className="flex items-center">
              <Mail />
              <span className="ml-2 font-semibold text-gray-700">request@example.com</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
