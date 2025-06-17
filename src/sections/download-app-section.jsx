import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import React from "react";

const DownloadAppSection = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="bg-[#F3F3F3] w-full py-12 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-xl space-y-4">
          <Typography className={"text-primary font-lg"}>
            Lorem Ipsum
          </Typography>
          <Typography type="h2" className={"text-gray-900"}>
            Lorem Ipsum Dolor Sit Amet
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
            suspendisse convallis. Uma a urna lectus donec felis risus duis
            pellentesque. Pellentesque ultricies ipsum.
          </Typography>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="inline-block">
              <Image
                src="/images/google-play.png"
                alt="Get it on Google Play"
                className="h-12"
                height={12}
                width={180}
                priority
              />
            </a>
            <a href="#" className="inline-block">
              <Image
                src="/images/app-store.png"
                alt="Download on the App Store"
                className="h-12"
                height={12}
                width={180}
                priority
              />
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:ml-12">
          <Image
            src={"/images/hand.png"}
            alt="Background"
            height={1000}
            width={1000}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
