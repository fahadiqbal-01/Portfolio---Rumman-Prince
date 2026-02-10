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
      className={`mt-14 transition-opacity duration-700 ease-out ${
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
          <h2 className="font-Bebas text-[32px] text-white italic">
            - {title}
          </h2>

          <div className="grid grid-cols-2 gap-8 mt-4">
            <p className="text-[16px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify">
              {description}
            </p>

            <div className="flex flex-col justify-center items-center gap-2">
              <img src={image} className="select-none" />
              <p className="font-Supreme text-[12px] text-white">
                {imageTitle}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
