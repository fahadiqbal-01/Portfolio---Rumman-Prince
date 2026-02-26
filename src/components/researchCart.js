"use client";
import { useState } from "react";

export default function ResearchCart({
  title,
  description,
  image,
  imageTitle,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`mt-6 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-14 transition-opacity duration-700 ease-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image}
        className="hidden"
        onLoad={() => setLoaded(true)}
        alt={imageTitle}
      />

      {loaded && (
        <>
          <h2 className="font-Bebas text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white italic">
            - {title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 2xl:gap-12 mt-4 sm:mt-6 md:mt-8">
            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify">
              {description}
            </p>

            <div className="flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4">
              <img
                src={image}
                className="select-none w-full max-w-full md:max-w-none"
              />
              <p className="font-Supreme text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] 2xl:text-[15px] text-white">
                {imageTitle}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
