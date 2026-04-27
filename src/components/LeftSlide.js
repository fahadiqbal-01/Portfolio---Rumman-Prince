"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import ContainerSec from "./containerSec";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebaseConfig";

const sortByOrder = (items) =>
  [...items].sort((a, b) => {
    const aOrder =
      typeof a.order === "number" ? a.order : Number.MAX_SAFE_INTEGER;
    const bOrder =
      typeof b.order === "number" ? b.order : Number.MAX_SAFE_INTEGER;

    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.id.localeCompare(b.id);
  });

export default function LeftSlide() {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const carouselRef = useRef(null);
  const x = useMotionValue(0);

  // Fetch certificates
  useEffect(() => {
    const certsRef = ref(db, "certificate");
    const unsubscribe = onValue(certsRef, (snapshot) => {
      const data = snapshot.val();
      setCertificates(
        data
          ? sortByOrder(
              Object.entries(data).map(([id, val]) => ({ id, ...val })),
            )
          : [],
      );
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Calculate carousel width
  const updateWidth = () => {
    if (carouselRef.current) {
      setContentWidth(carouselRef.current.scrollWidth / 2);
    }
  };

  // Setup carousel width on mount and resize
  useEffect(() => {
    if (certificates.length === 0) return;

    updateWidth();
    const timeout = setTimeout(updateWidth, 100);

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timeout);
    };
  }, [certificates]);

  // Auto-scroll animation
  useAnimationFrame((time, delta) => {
    if (!isDragging && !isHovered && contentWidth > 0) {
      const moveBy = (50 * delta) / 1000;
      let newX = x.get() - moveBy;

      if (newX <= -contentWidth) {
        newX += contentWidth;
      } else if (newX > 0) {
        newX -= contentWidth;
      }

      x.set(newX);
    }
  });

  // Handle drag repositioning
  const handleDrag = () => {
    let currentX = x.get();
    if (currentX <= -contentWidth) {
      x.set(currentX + contentWidth);
    } else if (currentX >= 0) {
      x.set(currentX - contentWidth);
    }
  };

  // Loading Skeleton
  if (isLoading) {
    return (
      <section className="mb-12 mt-20 relative z-40">
        <ContainerSec>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas mb-8"
          >
            Certificates
          </motion.h1>
        </ContainerSec>

        <div className="overflow-hidden px-6 max-w-full">
          <div className="flex gap-4 w-max">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px] 2xl:min-w-[450px] h-[100px] sm:h-[125px] md:h-[150px] lg:h-[175px] xl:h-[200px] 2xl:h-[225px] relative overflow-hidden bg-[#29282a] animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (certificates.length === 0) {
    return (
      <section className="mb-12 mt-20 relative z-40">
        <ContainerSec>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas mb-8"
          >
            Certificates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg"
          >
            No certificate to show
          </motion.p>
        </ContainerSec>
      </section>
    );
  }

  return (
    <section className="mb-12 mt-20 relative z-40">
      <ContainerSec>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white font-Bebas mb-8"
        >
          Certificates
        </motion.h1>
      </ContainerSec>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="overflow-hidden cursor-grab active:cursor-grabbing px-6 max-w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={carouselRef}
          style={{ x }}
          drag="x"
          dragConstraints={{
            left: -contentWidth * 1.5,
            right: contentWidth * 0.5,
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onDrag={handleDrag}
          whileTap={{ cursor: "grabbing" }}
          className="flex gap-4 w-max will-change-transform transform-[translateZ(0)]"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id || index}
              className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] xl:min-w-[400px] 2xl:min-w-[450px] h-[100px] sm:h-[125px] md:h-[150px] lg:h-[175px] xl:h-[200px] 2xl:h-[225px] relative overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(cert.imageUrl)}
            >
              <Image
                src={cert.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                quality={100}
                draggable={false}
                alt={`Certificate ${index + 1}`}
                className="duration-300 ease-out object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white hover:text-red-500 duration-300 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  fill
                  className="rounded-xl object-contain drop-shadow-2xl"
                  alt="Certificate preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
