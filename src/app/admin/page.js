"use client";
import { useState } from "react";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Logged in:", userCredential.user);
      router.push("/uploadData");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('/images/researchBanner.jpg')] bg-cover bg-center">
      <div className="bg-black/10 backdrop-blur-lg bg-opacity-70 p-10 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl text-[#000000] font-Bebas text-center mb-6">
          Admin Login
        </h1>

        {error && (
          <p className="text-red-500 text-center mb-4 font-Supreme">{error}</p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-4 rounded-md bg-[#000000] text-white placeholder-gray-400 focus:outline-yellow-400 "
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-3 px-4 rounded-md bg-[#000000] text-white placeholder-gray-400 focus:outline-yellow-400 "
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 py-3 bg-yellow-400 text-black font-semibold rounded-md select-none cursor-pointer
             hover:bg-transparent hover:text-yellow-400 border-2 border-transparent hover:border-yellow-400 transition-all duration-300 "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
