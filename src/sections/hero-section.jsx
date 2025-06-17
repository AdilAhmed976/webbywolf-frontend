import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TextAnimateBlur } from "@/components/animation/text-animate-blur";

const HeroSection = () => {
  return (
    <div className="relative  min-h-[70vh] [sm:min-h-screen flex">
      {/* Left: Content */}
      <div className="w-full sm:w-1/2 relative flex flex-col gap-4 justify-center px-6 py-24 md:py-8 sm:px-12 z-10">
        <Typography className={"w-full md:w-[60%]"} type="h1">
          <TextAnimateBlur animation="blurInUp" by="word" duration={1}>
            Lorem ipsum dolor sit amet
          </TextAnimateBlur>
        </Typography>
        <Typography>
          <TextAnimateBlur animation="blurInDown" by="word" duration={1}>
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </TextAnimateBlur>
        </Typography>

        <div className="flex items-center gap-2 mt-2">
          <Input type="text" />
          <Button className={"h-11"}>
            Submit
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-2 font-[500] text-[16px]">
          <svg
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="29" rx="14.5" fill="#155ADA" />
            <path d="M9 13.5L14 18.5L21 10.5" stroke="white" strokeWidth="2" />
          </svg>

          <span>No credit card required!</span>
        </div>
      </div>

      {/* Right: Diagonal Image */}
      <div
        className="hidden sm:block sm:w-1/2 relative overflow-hidden"
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Image
          src={`/images/hero-bg.png`}
          alt="hero-image"
          className="w-full h-full object-cover"
          width={"500"}
          height={"500"}
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
