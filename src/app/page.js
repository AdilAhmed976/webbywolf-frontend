"use client";

import BackgroundCard from "@/components/ui/background-card";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import BikeFeatureSection from "@/sections/bike-feature-section";
import BlogSection from "@/sections/blog-section";
import FeatureSection from "@/sections/feature-section";
import HeroSection from "@/sections/hero-section";
import Customers from "@/sections/our-customers";
import SubmitRequestForm from "@/sections/submit-request-form";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BikeFeatureSection />

      <FeatureSection />

      <BackgroundCard
        imageSrc={"bike-background.png"}
        heading="Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi."
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.",
          "Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.",
        ]}
      />

      <Customers />

      <BlogSection />

      <BackgroundCard
        imageSrc={"music-background.png"}
        heading="dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi. dolor sit amet consectetur. Quis adipiscing"
      />

      <SubmitRequestForm />
    </>
  );
}
