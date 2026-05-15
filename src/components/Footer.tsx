import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#06060c] border-t border-purple-900/20 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/clipbunlogo.png" alt="Clipbun.io logo" width={32} height={32} className="rounded-lg" />
              <span className="text-xl font-extrabold gradient-text">Clipbun.io</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium pre-edited anime clips and thumbnails designed to skyrocket your TikTok and YouTube views.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.tiktok.com/@light35567?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-500 hover:text-purple-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.05a4.85 4.85 0 01-1-.36z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@Clipbun.io6466" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-500 hover:text-pink-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </a>
              <a href="https://x.com/Clipbunio" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-gray-500 hover:text-sky-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#clips" className="hover:text-purple-400 transition-colors">Anime Clips</Link></li>
              <li><Link href="/#thumbnails" className="hover:text-purple-400 transition-colors">Thumbnails</Link></li>
              <li><Link href="/#pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/faq" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">© 2026 Clipbun.io. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built for creators. Powered by anime.</p>
        </div>
      </div>
    </footer>
  );
}
