"use client";

import ContainerSec from "@/components/containerSec";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full overflow-x-hidden pb-20 sm:pb-25 md:pb-30 lg:pb-40 2xl:pb-50">
      {/* ================= HERO SECTION ================= */}
      <div className="relative 2xl:h-[90vh] xl:h-[90vh] lg:h-[90vh] md:h-[50vh] h-[60vh] w-full overflow-hidden ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-full object-cover"
        >
          <source src="/images/bv.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000]/40"></div>

        {/* Hero Content */}
        <div className=" absolute top-0 2xl:left-50 xl:left-20 z-10 flex flex-col justify-center h-full 2xl:max-w-6xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl max-w-auto mx-auto px-6 ">
          <motion.h1
            onViewportEnter={() => {
              const element = document.getElementById("hey");
              if (element) element.classList.add("typing-active");
            }}
            className="
            font-Bebas text-[#ffffff]
            text-[32px]
            sm:text-[48px]
            md:text-[60px]
            lg:text-[60px]
            xl:text-[80px]
            2xl:text-[94px]
          "
            id="hey"
          >
            Shah Mohammad Rumman Prince
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="
            2xl:mt-4 xl:mt-4 lg:mt-0 text-[#ffffff] font-Supreme font-light
            2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[20px] text-[14px]
          "
          >
            I aspire to contribute to interdisciplinary research and development
            efforts in disaster risk reduction, climate change adaptation, and
            sustainable development. With a focus on vulnerable populations and
            systemic resilience, I aspire to support innovative, evidence-based
            strategies that enhance community preparedness, reduce disaster
            risks, and foster a more sustainable and equitable future.
          </motion.p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <ContainerSec>
        {/* Signature */}
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          src="/images/sig.png"
          className="invert mx-auto my-8 sm:my-10 md:my-12 lg:my-14 2xl:my-16 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] 2xl:max-w-[450px] rotate-12"
          alt="signature"
        />

        {/* About Section */}
        <div className="pb-10 sm:pb-12 md:pb-14 lg:pb-16 2xl:pb-20 border-b border-gray-300">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-Bebas text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          >
            Hey, I’m Shah Mohammad Rumman Prince!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-14"
          >
            <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] text-white font-Supreme leading-relaxed">
              <a
                href="https://du.ac.bd/undergrad/IDMVS"
                target="_blank"
                className="text-yellow-400"
              >
                BSS Student (Disaster Management & Vulnerability Studies),
                University of Dhaka
              </a>
              <br />
              <br />
              I’m currently pursuing my Bachelor of Social Sciences (BSS) at the
              Institute of Disaster Management and Vulnerability Studies at the
              University of Dhaka.
              <br />
              <br />
              My core goal is to contribute to interdisciplinary research and
              development in disaster risk reduction (DRR), climate change
              adaptation, and sustainable development—with a clear emphasis on
              vulnerable populations and systemic resilience.
              <br />
              <br />
              I’m building strong technical foundations in research methodology,
              GIS, project management, and data analytics including SPSS and
              Python.
              <br />
              <br />I serve as President of the Environment & Disaster
              Management Club and work as a Research Assistant at DU.
            </p>

            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              src="/images/prince.png"
              className="w-full 2xl:max-w-[500px] xl:max-w-[500px] lg:max-w-[500px] md:max-w-[350px] sm:max-w-[280px] max-w-[250px] mx-auto lg:ml-auto 2xl:my-0 xl:my-0 lg:my-0 md:my-auto select-none"
              alt="Prince"
            />
          </motion.div>
        </div>

        {/* Socials */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 2xl:mt-20">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas"
          >
            Socials
          </motion.h1>

          <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 2xl:mt-8 flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 2xl:gap-6">
            <motion.a
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              href="https://www.linkedin.com/in/shah-mohammad-rumman-princee/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-Supreme text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]
                text-black bg-white
                px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3
                border-2 border-white
                hover:border-yellow-400
                hover:text-yellow-400
                hover:bg-transparent
                duration-300 ease-out
              "
            >
              LinkedIn
            </motion.a>

            <motion.a
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              href="https://github.com/rummanaminn-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-Supreme text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]
                text-black bg-white
                px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3
                border-2 border-white
                hover:border-yellow-400
                hover:text-yellow-400
                hover:bg-transparent
                duration-300 ease-out
              "
            >
              Github
            </motion.a>

            <motion.a
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ amount: 0.3, once: true }}
              href="mailto:shahmdrumman-11-2022412854@idmvs.du.ac.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-Supreme text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]
                text-black bg-white
                px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3
                border-2 border-white
                hover:border-yellow-400
                hover:text-yellow-400
                hover:bg-transparent
                duration-300 ease-out
              "
            >
              Mail
            </motion.a>
          </div>
        </div>

        {/* Education */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 2xl:mt-20">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas"
          >
            Education
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="font-Supreme text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[17px] text-white mt-2 sm:mt-3 md:mt-4"
          >
            <span className="font-bold">University of Dhaka</span> <br />
            Degree: BSS <br />
            Subject: Disaster Management and Vulnerability Studies <br />
            Duration: 4 years
          </motion.p>
        </div>
      </ContainerSec>
    </section>
  );
}
