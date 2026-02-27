"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] py-6 sm:py-8 md:py-10 lg:py-12 2xl:py-16 text-center text-sm text-gray-500 border-t border-gray-300 select-none">
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="font-Bebas text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-[#ffffff]"
        >
          Let's get in touch!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-8 mt-3 sm:mt-4 md:mt-5"
        >
          <a
            href="https://www.linkedin.com/in/shah-mohammad-rumman-princee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/linkedin.png"
              className="w-5 sm:w-6 md:w-7 lg:w-8 2xl:w-9 invert-100 hover:scale-[1.2] duration-300 ease-out"
            />
          </a>
          <a
            href="https://github.com/rummanaminn-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/github.png"
              className="w-5 sm:w-6 md:w-7 lg:w-8 2xl:w-9 invert-100 hover:scale-[1.2] duration-300 ease-out"
            />
          </a>
          <a
            href="mailto:shahmdrumman-11-2022412854@idmvs.du.ac.bd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="icons/apple.png"
              className="w-5 sm:w-6 md:w-7 lg:w-8 2xl:w-9 invert-100 hover:scale-[1.2] duration-300 ease-out"
            />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="pt-4 sm:pt-5 md:pt-6 lg:pt-8 2xl:pt-10 text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px]"
      >
        &copy; {new Date().getFullYear()} Mohammad R. Prince. All rights
        reserved.
      </motion.div>
    </footer>
  );
}
