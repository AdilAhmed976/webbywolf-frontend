import Image from "next/image";
import clsx from "clsx";
import { Typography } from "./typography";

export default function BackgroundCard({ imageSrc, heading, paragraphs = [] }) {
  return (
    <div className="relative w-full h-[652px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={`/images/${imageSrc}`}
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-10 text-white max-w-4xl mx-auto flex flex-col gap-4 justify-center h-full">
        {heading && (
          <Typography type="h2" className={"text-center"}>
            {heading}
          </Typography>
        )}
        {paragraphs?.length > 0 &&
          paragraphs.map((text, i) => (
            <Typography
              key={i}
              className="text-sm md:text-base text-gray-200 leading-relaxed"
            >
              {text}
            </Typography>
          ))}
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 bg-[#DBDBDB] font-extrabold text-black h-[60px] w-[160px] flex justify-center items-center">
        <Typography className={"font-[800] text-[32px]"}> LOGO</Typography>
      </div>
    </div>
  );
}
