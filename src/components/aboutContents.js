import Link from "next/link";
import ContainerSec from "./containerSec";

export default function AboutContents() {
  return (
    <div className=" pb-50 ">
      <div className=" h-[60vh] overflow-hidden relative">
        <img
          src="/images/aboutBanner.jpg"
          className=" absolute left-0 -top-10 -z-20 select-none "
        />
        <h1 className=" font-Bebas text-[94px] text-white flex flex-col absolute left-[50%] top-[50%] translate-[-50%] ">
          CV
        </h1>
      </div>
      <ContainerSec>
        <div className="w-250 h-220 bg-[#000000] mx-auto mt-30 ">
          <p className=" font-Supreme text-[16px] text-white w-fit mx-auto mb-6 ">
            I routinely update my CV, but the most up-to-date news will be
            available on my{" "}
            <Link
              href="/projects"
              className=" font-bold underline text-yellow-400 "
            >
              Project
            </Link>{" "}
            and
            <Link
              href="/researches"
              className=" font-bold underline text-yellow-400 "
            >
              {" "}
              Researche
            </Link>{" "}
            page. Current CV Version: January 2026
          </p>
          <iframe
            src="CV/Shah Mohammad Rumman Prince.pdf"
            className="w-full h-full"
            title="CV"
          />
        </div>
      </ContainerSec>
    </div>
  );
}
