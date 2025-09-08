"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Type for each sparkle
interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

function SparklesBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const stars: Sparkle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage across screen
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2px – 6px
      delay: Math.random() * 5, // staggered animation
      duration: Math.random() * 10 + 5, // 5s–15s
    }));
    setSparkles(stars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -30], // float upward
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full bg-purple-300 shadow-[0_0_10px_#a78bfa]"
          style={{
            width: star.size,
            height: star.size,
            position: "absolute",
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [question, setQuestion] = useState<string>("");
  const [fortune, setFortune] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const askFortune = async () => {
    if (!question) return;
    setLoading(true);
    setFortune("");

    try {
      const res = await fetch("/api/fortune", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      type FortuneResponse = { fortune?: string };
      const data: FortuneResponse = await res.json();
      setFortune(data.fortune || "The spirits are silent...");
    } catch (err) {
      console.error(err);
      setFortune("Something went wrong while consulting the spirits.");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white font-serif overflow-hidden">
      <SparklesBackground />

      <h1 className="text-4xl font-bold mb-6 mt-10 text-purple-300 tracking-widest drop-shadow-lg relative z-10">
        Ask The Oracle
      </h1>

      {/* Crystal Ball */}
      <motion.div
        animate={{
          scale: loading ? [1, 1.1, 1] : 1,
          boxShadow: loading
            ? ["0 0 20px #a78bfa", "0 0 40px #c084fc", "0 0 20px #a78bfa"]
            : "0 0 20px #6d28d9",
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-40 h-40 rounded-full bg-gradient-to-b from-purple-500 to-indigo-700 flex items-center justify-center mb-6 relative z-10"
      >
        <span className="text-xl opacity-80"></span>
      </motion.div>

      <input
        type="text"
        placeholder="Ask your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-72 p-3 mb-4 rounded-lg bg-black/40 border border-purple-400 text-purple-100 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg relative z-10"
      />

      <button
        onClick={askFortune}
        disabled={!question || loading}
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-lg font-semibold tracking-wider shadow-[0_0_15px_#a855f7] hover:shadow-[0_0_25px_#c084fc] transition-all relative z-10"
      >
        {loading ? "Consulting the spirits..." : "Reveal Fortune"}
      </button>

      {fortune && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="fortune-box mb-6 mt-8 p-6 rounded-2xl border border-purple-500 bg-black/60 shadow-[0_0_30px_#9333ea] max-w-md text-center relative z-10"
        >
          <p className="text-xl text-purple-200 italic">{fortune}</p>
        </motion.div>
      )}
    </main>
  );
}

