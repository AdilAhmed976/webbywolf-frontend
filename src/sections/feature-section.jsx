import React from "react";

import { Button } from "@/components/ui/button";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import { Phone } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-1",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-2",
  },
  {
    title:
      "Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.",
    alt: "FeatureSection-3",
  },
];

const FeatureSection = () => {
  return (
    <div className="my-6 sm:my-20 lg:my-30">
      <section className="bg-white shadow-custom ml-0 md:ml-20 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            <div className="space-y-4">
              <Typography type="h5" className={"text-primary"}>
                Lorem ipsum dolor sit
              </Typography>
              <Typography type="h1">Lorem ipsum dolor sit amet</Typography>
              <Typography type="label">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </Typography>

              {/* Features List */}
              <div className="space-y-10 my-4 ">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <Image
                      src={"/images/icon.png"}
                      alt={item.alt || "feature Image"}
                      width={36}
                      height={36}
                      className="object-cover"
                      priority
                    />
                    <div>
                      <Typography className="font-[600]">
                        {item.title}
                      </Typography>
                      <Typography className={"font-[400]"}>
                        {item.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-full">
            <Image
              src={`/Images/person.png`}
              alt="Motorbike-2"
              className="w-full h-full object-contain"
              width={"500"}
              height={"500"}
              priority
            />
          </div>
        </div>

        {/* Gradient Footer Line */}
        <div className="w-full mt-8 flex justify-end">
          <Gradient className="w-full md:w-[94%]" />
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
