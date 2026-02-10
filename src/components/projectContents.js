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
    <div className=" pb-50 ">
      <div className=" h-[60vh] relative select-none">
        <img
          src="/images/projectBanner.jpg"
          property="priority"
          className=" w-full mx-auto absolute left-0 -top-170 -z-20 select-none  "
          priority="priority"
        />
        <h1 className=" font-Bebas text-[94px] text-white flex flex-col absolute left-[50%] top-[50%] translate-[-50%] ">
          Projects
        </h1>
      </div>
      <ContainerSec>
        <h1 className="font-Bebas text-[32px] text-white mt-30 select-none">
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
