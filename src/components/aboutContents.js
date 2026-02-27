"use client";
import Link from "next/link";
import ContainerSec from "./containerSec";
import { motion } from "framer-motion";

export default function AboutContents() {
  return (
    <div className="pb-30 sm:pb-40 md:pb-50 lg:pb-60 2xl:pb-70">
      {/* banner */}
      <div className="2xl:h-[60vh] xl:h-[60vh] lg:h-[60vh] md:h-[25vh] h-[15vh] relative select-none">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/images/aboutBanner.jpg"
          property="priority"
          className="w-full mx-auto absolute left-0 2xl:-top-60 xl:-top-35 lg:-top-25 -top-20 -z-50 select-none"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="font-Bebas 2xl:text-[94px] xl:text-[94px] lg:text-[84px] md:text-[64px] text-[34px] text-white flex flex-col absolute left-[50%] 2xl:top-[50%] xl:top-[50%] lg:top-[50%] md:top-[50%] top-[30%] translate-[-50%]"
        >
          CV
        </motion.h2>
      </div>
      {/* banner */}
      {/* main content */}
      <ContainerSec>
        <div className="bg-[#000000] mx-auto mt-20 sm:mt-24 md:mt-30 lg:mt-36 2xl:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4 sm:px-0"
          >
            <p className="font-Supreme text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] text-white w-full sm:w-fit">
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
          </motion.div>

          {/* PDF Viewer for large devices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden lg:block w-full overflow-hidden rounded-lg select-none px-2 sm:px-0"
          >
            <iframe
              src="CV/Shah Mohammad Rumman Prince.pdf"
              className="w-full h-[600px] sm:h-[700px] md:h-[80vh] lg:h-[85vh] 2xl:h-screen border-0"
              title="CV"
              property="priority"
              style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                WebkitTouchCallout: "none",
              }}
            />
          </motion.div>

          {/* Fallback for small devices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:hidden xl:hidden 2xl:hidden w-full bg-transparent rounded-lg p-6 sm:p-8 border border-gray-300 shadow-lg shadow-gray-300/20 text-center"
          >
            <p className="font-Supreme text-[13px] sm:text-[14px] md:text-[15px] text-gray-300 mb-6">
              Your browser does not support viewing this document.{" "}
              <a
                href="CV/Shah Mohammad Rumman Prince.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-bold underline transition-colors"
              >
                Click here to download
              </a>{" "}
              the document.
            </p>
          </motion.div>
        </div>
        <div className="2xl:mt-25 xl:mt-25 lg:mt-25 md:mt-0 mt-15">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas"
          >
            ​Academic Affiliations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] text-white font-Supreme mt-2 sm:mt-3 md:mt-4"
          >
            I am affiliated with the following societies, programs, and
            initiatives. Feel free to check out any of their websites that are
            of interest to you!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 2xl:mt-10 grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6 2xl:gap-8"
          >
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
          </motion.div>
        </div>
      </ContainerSec>
      {/* main content */}
    </div>
  );
}
