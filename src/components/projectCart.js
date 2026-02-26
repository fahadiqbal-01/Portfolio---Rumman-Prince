export default function ProjectContent({
  pTitle,
  contribution,
  description,
  duration,
}) {
  return (
    <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 2xl:mt-14">
      <h1 className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] italic capitalize font-Bebas">
        - {pTitle}
      </h1>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-2 sm:mt-3 md:mt-4">
        <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[24px] text-white font-Bebas">
          Description
        </span>{" "}
        <br />
        {description}
      </p>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-3 sm:mt-4 md:mt-5 lg:mt-6">
        <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[24px] text-white font-Bebas">
          My Contribution
        </span>
        <br />
        {contribution}
      </p>
      <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-2 sm:mt-3 md:mt-4">
        <span className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] 2xl:text-[24px] text-white font-Bebas">
          Project Duration
        </span>
        <br />
        {duration}
      </p>
    </div>
  );
}
