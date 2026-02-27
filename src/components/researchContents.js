"use client";
import ContainerSec from "./containerSec";
import ResearchCart from "./researchCart";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { motion } from "framer-motion";

export default function ResearchContents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const researchRef = ref(db, "research");

    // Listen for real-time updates
    const unsubscribe = onValue(researchRef, (snapshot) => {
      const val = snapshot.val();

      // Map data to an array with id
      const formattedData = val
        ? Object.entries(val).map(([id, item]) => ({
            id,
            title: item.title,
            description: item.description,
            image: item.imageUrl || "/images/res.jpg", // Use Cloudinary URL
            imageTitle: item.imageTitle || "",
          }))
        : [];

      setData(formattedData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pb-30 sm:pb-40 md:pb-50 lg:pb-60 2xl:pb-70">
      {/* Banner Section */}
      <div className="2xl:h-[60vh] xl:h-[60vh] lg:h-[60vh] md:h-[25vh] h-[15vh] relative select-none">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/images/researchBanner.jpg"
          alt="Research Banner"
          className="w-full absolute left-0 2xl:-top-60 xl:-top-35 lg:-top-25 -top-20 -z-20 select-none"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="font-Bebas 2xl:text-[94px] xl:text-[94px] lg:text-[84px] md:text-[64px] text-[34px] text-white absolute left-[50%] 2xl:top-[50%] xl:top-[50%] lg:top-[50%] md:top-[50%] top-[30%] translate-[-50%]"
        >
          Research
        </motion.h1>
      </div>

      {/* Research List */}
      <ContainerSec>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="font-Bebas text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white mt-20 sm:mt-24 md:mt-30 lg:mt-36 2xl:mt-40 select-none"
        >
          My Researches
        </motion.h1>

        {loading ? (
          <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] font-Supreme mt-4 sm:mt-6 md:mt-8">
            Loading...
          </p>
        ) : data.length === 0 ? (
          <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] 2xl:text-[18px] font-Supreme mt-4 sm:mt-6 md:mt-8">
            No research data found.
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {data.map((item) => (
              <ResearchCart
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                imageTitle={item.imageTitle}
              />
            ))}
          </motion.div>
        )}
      </ContainerSec>
    </div>
  );
}
