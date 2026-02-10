"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { ref, push, set } from "firebase/database";
import { db } from "../../../firebaseConfig";
import Container from "@/components/container";
import axios from "axios";

export default function UploadData() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingUpload, setLoadingUpload] = useState(false);

  // Research state
  const [resTitle, setResTitle] = useState("");
  const [resDescription, setResDescription] = useState("");
  const [resImage, setResImage] = useState(null);
  const [resImageTitle, setResImageTitle] = useState("");

  // Project state
  const [projTitle, setProjTitle] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [projDuration, setProjDuration] = useState("");
  const [projContribution, setProjContribution] = useState("");

  // ------------------ AUTH CHECK ------------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin"); // redirect if not logged in
      } else {
        setLoadingAuth(false); // allow rendering page if logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  //   ------------------ UPLOAD HANDLERS ------------------
  const handleUploadResearch = async (e) => {
    e.preventDefault();
    if (!resImage) return alert("Please select an image!");
    setLoadingUpload(true);

    try {
      const formData = new FormData();
      formData.append("file", resImage);
      formData.append("upload_preset", "rummansPortfolio");

      const cloudName = "dnm3tmkca";
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
      );

      const imageUrl = response.data.secure_url;

      const newRef = push(ref(db, "research"));
      await set(newRef, {
        title: resTitle,
        description: resDescription,
        imageTitle: resImageTitle,
        imageUrl,
      });

      alert("Research uploaded ✅");
      setResTitle("");
      setResDescription("");
      setResImage(null);
      setResImageTitle("");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed!");
    } finally {
      setLoadingUpload(false);
    }
  };

  const handleUploadProject = async (e) => {
    e.preventDefault();
    setLoadingUpload(true);

    try {
      const newRef = push(ref(db, "project"));
      await set(newRef, {
        title: projTitle,
        description: projDescription,
        duration: projDuration,
        contribution: projContribution,
      });

      alert("Project uploaded ✅");
      setProjTitle("");
      setProjDescription("");
      setProjDuration("");
      setProjContribution("");
    } catch (err) {
      console.error("Project upload failed:", err);
      alert("Upload failed!");
    } finally {
      setLoadingUpload(false);
    }
  };

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Checking authentication...
      </div>
    );
  }

  return (
    <section className="py-12 px-6 md:px-20">
      <Container>
        {/* Research Form */}
        <form onSubmit={handleUploadResearch} className="flex flex-col gap-4">
          <h1 className="font-Bebas text-[28px] text-white">Research</h1>
          <input
            type="text"
            value={resTitle}
            placeholder="Title"
            onChange={(e) => setResTitle(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white rounded-sm focus:outline-yellow-400"
            required
          />
          <textarea
            value={resDescription}
            placeholder="Description"
            onChange={(e) => setResDescription(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white h-40 rounded-sm focus:outline-yellow-400"
            required
          />
          {/* Image Upload */}
          <div className="flex flex-col gap-2 -ml-0.5 ">
            <input
              type="file"
              id="researchImage"
              accept="image/*"
              onChange={(e) => setResImage(e.target.files[0])}
              className="hidden"
              required
            />

            <label
              htmlFor="researchImage"
              className="w-fit cursor-pointer border-2 border-white px-4 py-2 text-white
    hover:border-yellow-400 hover:text-yellow-400 duration-300 rounded-md"
            >
              Upload Image
            </label>

            {resImage && (
              <p className="text-sm text-gray-300">Selected: {resImage.name}</p>
            )}
          </div>

          <input
            type="text"
            value={resImageTitle}
            placeholder="Image Title"
            onChange={(e) => setResImageTitle(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white rounded-sm focus:outline-yellow-400"
            required
          />
          <button
            type="submit"
            disabled={loadingUpload}
            className="text-[18px] text-black mt-4 px-3 py-1 border-2 border-transparent bg-white rounded-md w-fit
            hover:text-yellow-400 hover:bg-transparent hover:border-yellow-400 duration-300 ease-out cursor-pointer select-none disabled:opacity-50"
          >
            {loadingUpload ? "Uploading..." : "Upload Research"}
          </button>
        </form>

        {/* Project Form */}
        <form
          onSubmit={handleUploadProject}
          className="flex flex-col gap-4 mt-30"
        >
          <h1 className="font-Bebas text-[28px] text-white">Project</h1>
          <input
            value={projTitle}
            placeholder="Title"
            onChange={(e) => setProjTitle(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white rounded-sm focus:outline-yellow-400"
            required
          />
          <textarea
            value={projDescription}
            placeholder="Description"
            onChange={(e) => setProjDescription(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white h-40 rounded-sm focus:outline-yellow-400"
            required
          />
          <input
            value={projContribution}
            placeholder="Contribution"
            onChange={(e) => setProjContribution(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white rounded-sm focus:outline-yellow-400"
            required
          />
          <input
            value={projDuration}
            placeholder="Duration"
            onChange={(e) => setProjDuration(e.target.value)}
            className="bg-transparent outline-2 outline-white py-2 px-2 text-white rounded-sm focus:outline-yellow-400"
            required
          />
          <button
            type="submit"
            disabled={loadingUpload}
            className="text-[18px] text-black mt-4 px-3 py-1 border-2 border-transparent bg-white rounded-sm w-fit
            hover:text-yellow-400 hover:bg-transparent hover:border-yellow-400 duration-300 ease-out cursor-pointer select-none disabled:opacity-50"
          >
            {loadingUpload ? "Uploading..." : "Upload Project"}
          </button>
        </form>
      </Container>
    </section>
  );
}
