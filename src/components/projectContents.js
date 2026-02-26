"use client";
import ContainerSec from "./containerSec";
import ProjectContent from "./projectCart";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

export default function ProjectContents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const researchRef = ref(db, "project");

    // Listen for real-time updates
    const unsubscribe = onValue(researchRef, (snapshot) => {
      const val = snapshot.val();

      // Map data to an array with id
      const formattedData = val
        ? Object.entries(val).map(([id, item]) => ({
            id,
            title: item.title,
            description: item.description,
            duration: item.duration,
            contribution: item.contribution,
          }))
        : [];

      setData(formattedData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pb-30 sm:pb-40 md:pb-50 lg:pb-60 2xl:pb-70">
      <div className="2xl:h-[60vh] xl:h-[60vh] lg:h-[60vh] md:h-[25vh] h-[15vh] relative select-none">
        <img
          src="/images/projectBanner.jpg"
          property="priority"
          className="w-full mx-auto absolute left-0 2xl:-top-150 xl:-top-105 lg:-top-82 md:-top-60 -top-40 -z-20 select-none"
          priority="priority"
        />
        <h1 className="font-Bebas 2xl:text-[94px] xl:text-[94px] lg:text-[84px] md:text-[64px] text-[34px] text-white flex flex-col absolute left-[50%] 2xl:top-[50%] xl:top-[50%] lg:top-[50%] md:top-[50%] top-[30%] translate-[-50%]">
          Projects
        </h1>
      </div>
      <ContainerSec>
        <h1 className="font-Bebas text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 2xl:text-[40px] text-white mt-20 sm:mt-24 md:mt-30 lg:mt-36 2xl:mt-40 select-none">
          My Projects
        </h1>
        <div>
          {loading ? (
            <p className="text-white text-[17px] font-Supreme mt-4">
              Loading...
            </p>
          ) : data.length === 0 ? (
            <p className="text-white text-[17px] font-Supreme mt-4">
              No research data found.
            </p>
          ) : (
            <div>
              {data.map((item) => (
                <ProjectContent
                  key={item.id}
                  pTitle={item.title}
                  description={item.description}
                  duration={item.duration}
                  contribution={item.contribution}
                />
              ))}
            </div>
          )}
        </div>
      </ContainerSec>
    </div>
  );
}
