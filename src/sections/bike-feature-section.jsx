import React from "react";

import { Button } from "@/components/ui/button";
import Gradient from "@/components/ui/gradient";
import { Typography } from "@/components/ui/typography";
import { Phone } from "lucide-react";
import Image from "next/image";

const features = [
  {
    Image: "/Images/thumb-1.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    Image: "/Images/thumb-2.png",
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    Image: "/Images/thumb-3.png",
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

const BikeFeatureSection = () => {
  return (
    <div
      className="my-20 md:my-30 p-0 md:ml-20"
      style={{ boxShadow: "0px 4px 25px 0px #00000026" }}
    >
      <section className="bg-white shadow-custom mx-10 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="flex flex-col justify-between p-8">
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
              <div className="space-y-4 my-4">
                {features.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <Image
                      src={item.Image}
                      alt={item.alt || "feature Image"}
                      width={146}
                      height={146}
                      className="object-cover"
                    />
                    <Typography type="label">{item.text}</Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA
              <div className="flex items-center gap-6 mt-6">
                <Button>Lorem Ipsum</Button>
                <Button
                  variant={"outline"}
                  className={"text-primary border-none"}
                >
                  <Phone /> 123456789
                </Button>
              </div> */}
          </div>

          {/* Right Image */}
          <div className="w-full h-full md:pr-4">
            <Image
              src={`/Images/bike.png`}
              alt="Motorbike"
              className="w-full h-full object-cover"
              width={"500"}
              height={"500"}
            />
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="flex items-center gap-6 mt-6">
          <Button>Lorem Ipsum</Button>
          <Button variant={"outline"} className={"text-primary border-none"}>
            <Phone /> 123456789
          </Button>
        </div>
        {/* Gradient Footer Line */}
      </section>
      <div className="w-full md:w-[96%] mt-8">
        <Gradient />
      </div>
    </div>
  );
};

export default BikeFeatureSection;
