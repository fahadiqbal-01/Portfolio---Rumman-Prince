"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { ref, push, set, onValue, update, remove } from "firebase/database";
import { db } from "../../../firebaseConfig";
import Container from "@/components/container";
import axios from "axios";

const sortByOrder = (items) =>
  [...items].sort((a, b) => {
    const aOrder = typeof a.order === "number" ? a.order : Number.MAX_SAFE_INTEGER;
    const bOrder = typeof b.order === "number" ? b.order : Number.MAX_SAFE_INTEGER;

    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.id.localeCompare(b.id);
  });

const moveItem = (items, fromIndex, toIndex) => {
  const nextItems = [...items];
  const [movedItem] = nextItems.splice(fromIndex, 1);
  nextItems.splice(toIndex, 0, movedItem);
  return nextItems;
};

export default function UploadData() {
  const router = useRouter();
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingUpload, setLoadingUpload] = useState(false);

  const [resTitle, setResTitle] = useState("");
  const [resDescription, setResDescription] = useState("");
  const [projTitle, setProjTitle] = useState("");
  const [projDescription, setProjDescription] = useState("");
  const [projDuration, setProjDuration] = useState("");
  const [projContribution, setProjContribution] = useState("");

  const [editResId, setEditResId] = useState(null);
  const [editProjId, setEditProjId] = useState(null);

  const [certImage, setCertImage] = useState(null);
  const [draggedCertId, setDraggedCertId] = useState(null);
  const [savingCertOrder, setSavingCertOrder] = useState(false);

  const [researches, setResearches] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/admin");
      } else {
        setLoadingAuth(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const researchesRef = ref(db, "research");
    const unsubscribeResearches = onValue(researchesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setResearches(list);
      } else {
        setResearches([]);
      }
    });

    const projectsRef = ref(db, "project");
    const unsubscribeProjects = onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({ id, ...val }));
        setProjects(list);
      } else {
        setProjects([]);
      }
    });

    const certsRef = ref(db, "certificate");
    const unsubscribeCerts = onValue(certsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.entries(data).map(([id, val]) => ({
          id,
          ...val,
        }));
        setCertificates(sortByOrder(list));
      } else {
        setCertificates([]);
      }
    });

    return () => {
      unsubscribeResearches();
      unsubscribeProjects();
      unsubscribeCerts();
    };
  }, []);

  const handleUploadResearch = async (e) => {
    e.preventDefault();
    setLoadingUpload(true);

    try {
      if (editResId) {
        const researchRef = ref(db, `research/${editResId}`);
        await update(researchRef, {
          title: resTitle,
          description: resDescription,
        });
        alert("Research updated.");
      } else {
        const newRef = push(ref(db, "research"));
        await set(newRef, {
          title: resTitle,
          description: resDescription,
        });
        alert("Research uploaded.");
      }

      setResTitle("");
      setResDescription("");
      setEditResId(null);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload/Update failed!");
    } finally {
      setLoadingUpload(false);
    }
  };

  const handleUploadProject = async (e) => {
    e.preventDefault();
    setLoadingUpload(true);

    try {
      if (editProjId) {
        const projectRef = ref(db, `project/${editProjId}`);
        await update(projectRef, {
          title: projTitle,
          description: projDescription,
          duration: projDuration,
          contribution: projContribution,
        });
        alert("Project updated ✅");
      } else {
        const newRef = push(ref(db, "project"));
        await set(newRef, {
          title: projTitle,
          description: projDescription,
          duration: projDuration,
          contribution: projContribution,
        });
        alert("Project uploaded ✅");
      }

      setProjTitle("");
      setProjDescription("");
      setProjDuration("");
      setProjContribution("");
      setEditProjId(null);
    } catch (err) {
      console.error("Project upload failed:", err);
      alert("Upload/Update failed!");
    } finally {
      setLoadingUpload(false);
    }
  };

  const handleEditResearchBtn = (res) => {
    setResTitle(res.title || "");
    setResDescription(res.description || "");
    setEditResId(res.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteResearch = async (id) => {
    if (confirm("Are you sure you want to delete this research?")) {
      try {
        await remove(ref(db, `research/${id}`));
        alert("Research deleted.");
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Delete failed.");
      }
    }
  };

  const handleEditProjectBtn = (proj) => {
    setProjTitle(proj.title || "");
    setProjDescription(proj.description || "");
    setProjDuration(proj.duration || "");
    setProjContribution(proj.contribution || "");
    setEditProjId(proj.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProject = async (id) => {
    if (confirm("Are you sure you want to delete this project?")) {
      try {
        await remove(ref(db, `project/${id}`));
        alert("Project deleted.");
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Delete failed.");
      }
    }
  };

  const handleUploadCertificate = async (e) => {
    e.preventDefault();
    if (!certImage) return alert("Please select an image!");
    setLoadingUpload(true);
    try {
      const formData = new FormData();
      formData.append("file", certImage);
      formData.append("upload_preset", "rummansPortfolio");
      const cloudName = "dnm3tmkca";
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
      );
      const newRef = push(ref(db, "certificate"));
      await set(newRef, {
        imageUrl: response.data.secure_url,
        order: certificates.length,
      });
      alert("Certificate uploaded.");
      setCertImage(null);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload/Update failed!");
    } finally {
      setLoadingUpload(false);
    }
  };
  const handleDeleteCertificate = async (id) => {
    if (confirm("Are you sure you want to delete this certificate?")) {
      try {
        await remove(ref(db, `certificate/${id}`));
        alert("Certificate deleted.");
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Delete failed.");
      }
    }
  };

  const handleCertificateDrop = async (targetCertId) => {
    if (!draggedCertId || draggedCertId === targetCertId || savingCertOrder) {
      setDraggedCertId(null);
      return;
    }

    const fromIndex = certificates.findIndex((cert) => cert.id === draggedCertId);
    const toIndex = certificates.findIndex((cert) => cert.id === targetCertId);

    if (fromIndex === -1 || toIndex === -1) {
      setDraggedCertId(null);
      return;
    }

    const reorderedCertificates = moveItem(certificates, fromIndex, toIndex).map(
      (cert, index) => ({
        ...cert,
        order: index,
      }),
    );

    setCertificates(reorderedCertificates);
    setDraggedCertId(null);
    setSavingCertOrder(true);

    try {
      const updates = {};
      reorderedCertificates.forEach((cert, index) => {
        updates[`certificate/${cert.id}/order`] = index;
      });
      await update(ref(db), updates);
    } catch (err) {
      console.error("Certificate reorder failed:", err);
      alert("Reordering certificates failed.");
    } finally {
      setSavingCertOrder(false);
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
          <h1 className="font-Bebas text-[28px] text-white">
            {editResId ? "Edit Research" : "Research"}
          </h1>
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
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loadingUpload}
              className="text-[18px] text-black mt-4 px-3 py-1 border-2 border-transparent bg-white rounded-md w-fit
              hover:text-yellow-400 hover:bg-transparent hover:border-yellow-400 duration-300 ease-out cursor-pointer select-none disabled:opacity-50"
            >
              {loadingUpload
                ? editResId
                  ? "Updating..."
                  : "Uploading..."
                : editResId
                  ? "Update Research"
                  : "Upload Research"}
            </button>
            {editResId && (
              <button
                type="button"
                className="text-[18px] text-white mt-4 px-3 py-1 border-2 border-red-500 rounded-md w-fit
                hover:bg-red-500 duration-300 ease-out cursor-pointer select-none"
                onClick={() => {
                  setEditResId(null);
                  setResTitle("");
                  setResDescription("");
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        {/* Project Form */}
        <form
          onSubmit={handleUploadProject}
          className="flex flex-col gap-4 mt-30"
        >
          <h1 className="font-Bebas text-[28px] text-white">
            {editProjId ? "Edit Project" : "Project"}
          </h1>
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
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loadingUpload}
              className="text-[18px] text-black mt-4 px-3 py-1 border-2 border-transparent bg-white rounded-sm w-fit
              hover:text-yellow-400 hover:bg-transparent hover:border-yellow-400 duration-300 ease-out cursor-pointer select-none disabled:opacity-50"
            >
              {loadingUpload
                ? editProjId
                  ? "Updating..."
                  : "Uploading..."
                : editProjId
                  ? "Update Project"
                  : "Upload Project"}
            </button>
            {editProjId && (
              <button
                type="button"
                className="text-[18px] text-white mt-4 px-3 py-1 border-2 border-red-500 rounded-md w-fit
                hover:bg-red-500 duration-300 ease-out cursor-pointer select-none"
                onClick={() => {
                  setEditProjId(null);
                  setProjTitle("");
                  setProjDescription("");
                  setProjDuration("");
                  setProjContribution("");
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>

        {/* Certificate Form */}
        <form
          onSubmit={handleUploadCertificate}
          className="flex flex-col gap-4 mt-30"
        >
          <h1 className="font-Bebas text-[28px] text-white">
            Certificate
          </h1>
          <div className="flex flex-col gap-2 -ml-0.5 ">
            <input
              type="file"
              id="certificateImage"
              accept="image/*"
              onChange={(e) => setCertImage(e.target.files[0])}
              className="hidden"
              required
            />
            <label
              htmlFor="certificateImage"
              className="w-fit cursor-pointer border-2 border-white px-4 py-2 text-white hover:border-yellow-400 hover:text-yellow-400 duration-300 rounded-md"
            >
              Upload Certificate Image
            </label>
            {certImage && (
              <p className="text-sm text-gray-300">
                Selected: {certImage.name}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loadingUpload}
              className="text-[18px] text-black mt-4 px-3 py-1 border-2 border-transparent bg-white rounded-sm w-fit hover:text-yellow-400 hover:bg-transparent hover:border-yellow-400 duration-300 ease-out cursor-pointer select-none disabled:opacity-50"
            >
              {loadingUpload ? "Uploading..." : "Upload Certificate"}
            </button>
          </div>
        </form>

        {/* Display Data */}
        <div className="mt-30 border-t border-gray-600 pt-10">
          <h1 className="font-Bebas text-[32px] text-white tracking-wider mb-8 text-center">
            Uploaded Data
          </h1>

          <div className="flex flex-col gap-12">
            {/* Researches List */}
            <div>
              <h2 className="font-Bebas text-[24px] text-yellow-400 mb-4 border-b border-gray-600 pb-2">
                Researches
              </h2>
              {researches.length === 0 ? (
                <p className="text-gray-400">No researches found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {researches.map((res) => (
                    <div
                      key={res.id}
                      className="border border-gray-600 p-4 rounded-md bg-white/5 flex flex-col gap-2"
                    >
                      <h3 className="text-xl font-bold text-white mt-2">
                        {res.title}
                      </h3>
                      <p className="text-gray-300 text-sm whitespace-pre-wrap">
                        {res.description}
                      </p>
                      {/* ACTION BUTTONS */}
                      <div className="flex gap-4 mt-4 border-t border-gray-600 pt-3">
                        <button
                          onClick={() => handleEditResearchBtn(res)}
                          className="bg-black text-white hover:bg-blue-500 hover:text-white px-3 py-1 rounded transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteResearch(res.id)}
                          className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Projects List */}
            <div>
              <h2 className="font-Bebas text-[24px] text-yellow-400 mb-4 border-b border-gray-600 pb-2">
                Projects
              </h2>
              {projects.length === 0 ? (
                <p className="text-gray-400">No projects found.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="border border-gray-600 p-4 rounded-md bg-white/5 flex flex-col gap-2"
                    >
                      <h3 className="text-xl font-bold text-white">
                        {proj.title}
                      </h3>
                      <p className="text-gray-300 text-sm whitespace-pre-wrap">
                        {proj.description}
                      </p>
                      {proj.duration && (
                        <p className="text-sm text-gray-400 mt-2">
                          <span className="font-semibold text-white">
                            Duration:
                          </span>{" "}
                          {proj.duration}
                        </p>
                      )}
                      {proj.contribution && (
                        <p className="text-sm text-gray-400">
                          <span className="font-semibold text-white">
                            Contribution:
                          </span>{" "}
                          {proj.contribution}
                        </p>
                      )}

                      {/* ACTION BUTTONS */}
                      <div className="flex gap-4 mt-4 border-t border-gray-600 pt-3">
                        <button
                          onClick={() => handleEditProjectBtn(proj)}
                          className="bg-black text-white hover:bg-blue-500 hover:text-white px-3 py-1 rounded transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Certificates List */}
            <div>
              <h2 className="font-Bebas text-[24px] text-yellow-400 mb-4 border-b border-gray-600 pb-2">
                Certificates
              </h2>
              {certificates.length === 0 ? (
                <p className="text-gray-400">No certificates found.</p>
              ) : (
                <>
                  <div className="mb-4 flex items-center justify-between gap-4 text-sm text-gray-400">
                    <p>Drag certificate cards to change their display order.</p>
                    {savingCertOrder && <p>Saving order...</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                      <div
                        key={cert.id}
                        draggable
                        onDragStart={() => setDraggedCertId(cert.id)}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => handleCertificateDrop(cert.id)}
                        onDragEnd={() => setDraggedCertId(null)}
                        className={`border p-4 rounded-md bg-white/5 flex flex-col gap-2 cursor-move transition ${
                          draggedCertId === cert.id
                            ? "border-yellow-400 opacity-60"
                            : "border-gray-600"
                        }`}
                      >
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                          Position {index + 1}
                        </p>
                        {cert.imageUrl && (
                          <div className="w-full h-40 relative rounded overflow-hidden">
                            <img
                              src={cert.imageUrl}
                              alt="Certificate"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}
                        <div className="flex gap-4 mt-4 border-t border-gray-600 pt-3">
                          <button
                            onClick={() => handleDeleteCertificate(cert.id)}
                            className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-1 rounded transition"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

