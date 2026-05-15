"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/clipbunlogo.png" alt="Clipbun.io logo" width={32} height={32} className="rounded-lg" />
            <span className="text-xl font-extrabold gradient-text">Clipbun.io</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
            <Link href="/#clips" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Anime Clips</Link>
            <Link href="/#thumbnails" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Thumbnails</Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#clips" className="text-sm text-gray-300 hover:text-white transition-colors font-medium">
              Browse
            </Link>
            <Link
              href="/#pricing"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity glow-purple"
            >
              Get Clips
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f0f1a] border-t border-purple-900/30 px-4 py-4 flex flex-col gap-4">
          <Link href="/" className="text-gray-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#clips" className="text-gray-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Anime Clips</Link>
          <Link href="/#thumbnails" className="text-gray-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Thumbnails</Link>
          <Link href="/#pricing" className="text-gray-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <Link
            href="/#pricing"
            className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Clips
          </Link>
        </div>
      )}
    </nav>
  );
}
