"use client";
import ContainerSec from "./containerSec";
import ResearchCart from "./researchCart";
import { db } from "../../firebaseConfig";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

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
    <div className="pb-50">
      {/* Banner Section */}
      <div className="h-[60vh] relative select-none">
        <img
          src="/images/researchBanner.jpg"
          alt="Research Banner"
          className="w-full absolute left-0 -top-65 -z-20 select-none"
        />
        <h1 className="font-Bebas text-[94px] text-white absolute left-[50%] top-[50%] translate-[-50%]">
          Research
        </h1>
      </div>

      {/* Research List */}
      <ContainerSec>
        <h1 className="font-Bebas text-[32px] text-white mt-30 select-none">
          My Researches
        </h1>

        {loading ? (
          <p className="text-white text-[17px] font-Supreme mt-4">Loading...</p>
        ) : data.length === 0 ? (
          <p className="text-white text-[17px] font-Supreme mt-4">
            No research data found.
          </p>
        ) : (
          <div>
            {data.map((item) => (
              <ResearchCart
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image} 
                imageTitle={item.imageTitle}
              />
            ))}
          </div>
        )}
      </ContainerSec>
    </div>
  );
}
