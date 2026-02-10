export default function ProjectContent({
  pTitle,
  contribution,
  description,
  duration,
}) {
  return (
    <div className=" mt-8 ">
      <h1 className=" text-white text-[32px] italic capitalize font-Bebas ">
        - {pTitle}
      </h1>
      <p className=" text-[16px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-2 ">
        <span className=" text-[20px] text-white font-Bebas ">Description</span>{" "}
        <br />
        {description}
      </p>
      <p className=" text-[16px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-3 ">
        <span className=" text-[20px] text-white font-Bebas ">
          My Contribution
        </span>
        <br />
        {contribution}
      </p>
      <p className=" text-[14px] font-Supreme text-white leading-relaxed whitespace-pre-line text-justify mt-2 ">
        <span className=" text-[20px] text-white font-Bebas ">
          Project Duration
        </span>
        <br />
        {duration}
      </p>
    </div>
  );
}
