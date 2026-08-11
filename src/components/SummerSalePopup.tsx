"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SummerSalePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so the page renders first
    const timer = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-[#12121a] border border-yellow-500/40 shadow-[0_0_40px_rgba(234,179,8,0.2)] p-8 text-center">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close"
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-2xl leading-none transition-colors"
        >
          &times;
        </button>

        {/* Badge */}
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-widest uppercase">
          Limited Time Offer
        </span>

        {/* Headline */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <Image src="/clipbunlogo.png" alt="Clipbun" width={40} height={40} className="rounded-lg" />
          <h2 className="text-3xl font-extrabold text-white">Summer Sale</h2>
        </div>
        <p className="text-yellow-400 text-4xl font-black mb-1">$250</p>
        <p className="text-gray-300 text-base mb-6">
          per&nbsp;<span className="text-white font-semibold">25-minute YouTube video</span>
          <br />
          <span className="text-gray-400 text-sm">Professional editing · Fast turnaround</span>
        </p>

        {/* CTA */}
        <a
          href="https://ytjobs.co/talent/profile/553169"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg transition-colors shadow-lg shadow-yellow-500/30"
        >
          Get Discount
        </a>
      </div>
    </div>
  );
}
