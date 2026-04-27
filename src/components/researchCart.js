"use client";

export default function ResearchCart({ title, description }) {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-14">
      <h2 className="font-Bebas text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white italic">
        - {title}
      </h2>

      <p className="mt-4 sm:mt-6 md:mt-8 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify max-w-4xl">
        {description}
      </p>
    </div>
  );
}
