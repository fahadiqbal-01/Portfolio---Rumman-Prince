import Link from "next/link";
import ContainerSec from "./containerSec";

export default function AboutContents() {
  return (
    <div className=" pb-50 ">
      <div className=" h-[60vh] relative select-none">
        <img
          src="/images/aboutBanner.jpg"
          property="priority"
          className="w-full mx-auto absolute left-0 -top-60 -z-20 select-none  "
        />
        <h1 className=" font-Bebas text-[94px] text-white flex flex-col absolute left-[50%] top-[50%] translate-[-50%] ">
          CV
        </h1>
      </div>
      <ContainerSec className={` max-w-280! `}>
        <div className=" h-screen bg-[#000000] mx-auto mt-30 ">
          <p className=" font-Supreme text-[16px] text-white w-fit mx-auto mb-6 ">
            I routinely update my CV, but the most up-to-date news will be
            available on my{" "}
            <Link
              href="/projects"
              className=" font-bold underline text-yellow-400 "
            >
              Project
            </Link>{" "}
            and{" "}
            <Link
              href="/researches"
              className=" font-bold underline text-yellow-400 "
            >
              Researche
            </Link>{" "}
            page. Current CV Version: January 2026
          </p>
          <iframe
            src="CV/Shah Mohammad Rumman Prince.pdf"
            className="w-full h-full"
            title="CV"
            property="priority"
          />
        </div>
        <div className=" mt-25  ">
          <h1 className=" text-[32px] text-white font-Bebas ">
            ​Academic Affiliations
          </h1>
          <p className=" text-[16px] text-white font-Supreme mt-2 ">
            I am affiliated with the following societies, programs, and
            initiatives. Feel free to check out any of their websites that are
            of interest to you!
          </p>
          <div className=" mt-6 grid grid-cols-5 grid-rows-2 gap-y-8 ">
            <img src="images/2.jpg" className=" w-50 " property="priority" />
            <img src="images/3.jpg" className=" w-50 " property="priority" />
            <img src="images/1.jpg" className=" w-50 " property="priority" />
            <img src="images/4.jpg" className=" w-50 " property="priority" />
            <img src="images/5.jpg" className=" w-50 " property="priority" />
            <img src="images/6.jpg" className=" w-50 " property="priority" />
            <img src="images/7.jpg" className=" w-50 " property="priority" />
            <img src="images/8.jpg" className=" w-50 " property="priority" />
            <img src="images/9.jpg" className=" w-50 " property="priority" />
            <img src="images/10.jpg" className=" w-50" property="priority" />
          </div>
        </div>
      </ContainerSec>
    </div>
  );
}
