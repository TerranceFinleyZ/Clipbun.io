import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

const featuredClips = [
  { id: "naruto-epic-run", title: "Pre-edited Template 30-sec Long", category: "clip" as const, price: 9.99, tag: "🔥 Hot", duration: "0:15", platform: ["TikTok", "YouTube"], coverColor: "from-orange-700 to-yellow-600", buttonLabel: "Starter", video: "/hiku.mp4", views: "15.5k", externalHref: "https://buy.stripe.com/eVqbJ1buxdKA5d541kgEg01" },
  { id: "aot-thunder-spear", title: "Pre-edited Template 30-sec Long", category: "clip" as const, price: 9.99, tag: "New", duration: "0:30", platform: ["TikTok"], coverColor: "from-gray-700 to-green-800", buttonLabel: "Starter", video: "/kings.mp4", views: "421.1k", externalHref: "https://buy.stripe.com/eVqbJ1buxdKA5d541kgEg01" },
  { id: "demon-slayer-breath", title: "Pre-edited Template 1-min", category: "clip" as const, price: 24.99, tag: "⚡ Viral", duration: "0:20", platform: ["TikTok", "YouTube"], coverColor: "from-red-800 to-orange-600", buttonLabel: "Creator", video: "/socc.mp4", titleAccent: "1-min", views: "11.4k", externalHref: "https://buy.stripe.com/aFa3cv9mp9uk0WPfK2gEg02" },
  { id: "jjk-domain-expansion", title: "Pre-edited Template 1-min", category: "clip" as const, price: 24.99, tag: "🔥 Hot", duration: "0:25", platform: ["YouTube"], coverColor: "from-indigo-800 to-purple-700", buttonLabel: "Creator", video: "/anka.mp4", titleAccent: "1-min", views: "1M", externalHref: "https://buy.stripe.com/aFa3cv9mp9uk0WPfK2gEg02" },
];

const featuredThumbnails = [
  { id: "naruto-thumb-1", title: "Mr.Beast Style Thumbnail", category: "thumbnail" as const, price: 49.99, tag: "Best Seller", resolution: "1280×720", platform: ["YouTube"], coverColor: "from-orange-600 to-red-700", image: "/moneyic.png", externalHref: "https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00" },
  { id: "aot-thumb-1", title: "Adventure Style Thumbnail", category: "thumbnail" as const, price: 49.99, tag: "New", resolution: "1280×720", platform: ["YouTube"], coverColor: "from-slate-700 to-emerald-800", image: "/Bmo.png", externalHref: "https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00" },
  { id: "demonslayer-thumb-1", title: "Crypto Kingpin Style Thumbnail", category: "thumbnail" as const, price: 49.99, resolution: "1280×720", platform: ["YouTube"], coverColor: "from-rose-700 to-orange-600", image: "/mmm.png", externalHref: "https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00" },
  { id: "jjk-thumb-1", title: "Luxury & Aura Farming Style Thumbnail", category: "thumbnail" as const, price: 49.99, tag: "⚡ Viral", resolution: "1280×720", platform: ["YouTube"], coverColor: "from-blue-900 to-purple-800", image: "/Boo.png", externalHref: "https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00" },
];

const stats = [
  { value: "500+", label: "Anime Clips" },
  { value: "300+", label: "Thumbnails" },
  { value: "10K+", label: "Happy Creators" },
  { value: "50M+", label: "Views Generated" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Instant Download",
    description: "Get your clips and thumbnails immediately after purchase. No waiting, no hassle.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "4K Ready Clips",
    description: "All clips are pre-edited with trending transitions, music beats, and effects for maximum engagement.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Proven to Boost Views",
    description: "Our clips are optimized for the algorithm — designed to hook viewers in the first 3 seconds.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Commercial License",
    description: "Use on any platform — TikTok, YouTube Shorts, Instagram Reels. Full commercial rights included.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/clback.png')" }}
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle gradient orbs on top */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-700/40 text-purple-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Edited Anime clips for Creators
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
            <span className="gradient-text">Dominate</span>
            <br />
            <span className="text-white">TikTok &amp; YouTube</span>
            <br />
          </h1>

          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pre-edited anime clips with viral transitions, beats, and effects — plus stunning thumbnails that get clicks.
            Built by Clipbun AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#clips"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-lg hover:opacity-90 transition-all glow-purple hover:scale-105 w-full sm:w-auto"
            >
              Browse Clips →
            </Link>
            <Link
              href="#thumbnails"
              className="px-8 py-4 rounded-full border border-purple-700/50 text-white font-semibold text-lg hover:bg-purple-900/30 transition-all w-full sm:w-auto"
            >
              Get Thumbnails
            </Link>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            Trusted by <span className="text-purple-300 font-semibold">10,000+</span> creators worldwide
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 border-y border-purple-900/20 bg-[#0d0d18]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black gradient-text">{s.value}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Clips */}
      <section id="clips" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Trending Now</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Featured Clips</h2>
            </div>
            <Link href="#clips" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredClips.map((clip) => (
              <ProductCard key={clip.id} {...clip} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="#clips" className="text-purple-400 text-sm font-medium">View all clips →</Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-[#0d0d18] border-y border-purple-900/20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-12">From Purchase to Viral</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Browse & Pick", desc: "Find the perfect anime clip or thumbnail for your content style." },
              { step: "02", title: "Instant Download", desc: "Pay securely and download your files instantly in full quality." },
              { step: "03", title: "Post & Go Viral", desc: "Upload directly to TikTok or YouTube and watch the views roll in." },
            ].map((item) => (
              <div key={item.step} className="relative flex flex-col items-center p-6">
                <div className="text-6xl font-black text-purple-900/50 mb-3 leading-none">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Why Clipbun.io</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Built for Viral Growth</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-600/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-700/40 to-pink-600/40 flex items-center justify-center text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Thumbnails */}
      <section id="thumbnails" className="py-20 px-4 bg-[#0d0d18] border-t border-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-pink-400 text-sm font-semibold uppercase tracking-widest mb-2">Long-Form Content</p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">Featured Thumbnails</h2>
            </div>
            <Link href="#thumbnails" className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredThumbnails.map((thumb) => (
              <ProductCard key={thumb.id} {...thumb} />
            ))}
          </div>
        </div>
      </section>

      {/* Long-Form Video Section */}
      <section className="py-20 px-4 border-t border-purple-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Long-Form Videos</h2>
            <p className="text-gray-400 text-base">
              Full-length, high-quality anime content built for YouTube — ready to upload.
            </p>
          </div>

          {/* Video player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#0f0f1a] border border-purple-900/30">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/Clipclipthumbnail.png"
            >
              <source src="/Thank.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Price label */}
          <p className="text-center text-gray-500 text-sm mt-3 flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            487k views
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="text-4xl font-black text-pink-400">$49.99</span>
            <a href="https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 transition-opacity">
              Pro Plan
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-[#0d0d18] border-t border-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Simple Monthly Pricing</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Simple monthly plans. Cancel anytime. New content drops every week.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter", price: 9.99, period: "/month",
                description: "Perfect for new creators just getting started.",
                features: ["3 Anime Clips / Per month", "30-Sec Long", "720p quality", "TikTok & YouTube ready", "Commercial license"],
                cta: "Get Started", highlight: false, badge: null, link: "https://buy.stripe.com/eVqbJ1buxdKA5d541kgEg01",
              },
              {
                name: "Creator", price: 24.99, period: "/month",
                description: "Most popular for growing content creators.",
                features: ["5 Anime Clips / Per month", "1-Min Long", "1080p quality", "TikTok, YouTube & Reels", "Commercial license", "Priority new releases", "Bonus effects pack"],
                cta: "Go Creator", highlight: true, badge: "Most Popular", link: "https://buy.stripe.com/aFa3cv9mp9uk0WPfK2gEg02",
              },
              {
                name: "Pro", price: 49.99, period: "/month",
                description: "For serious creators who post Long form content.",
                features: ["3 Videos 10-Min Long / Per month", "3 High Quality Thumbnails", "4K quality", "All platforms", "Commercial license", "Early access to new drops", "Custom thumbnail request", "Discord community access"],
                cta: "Go Pro", highlight: false, badge: "Best Value", link: "https://buy.stripe.com/5kQaEX9mp8qgcFx8hAgEg00",
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? "bg-gradient-to-b from-purple-800/40 to-pink-800/20 border-2 border-purple-500/60 scale-105 glow-purple"
                    : "bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-700/40"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-200 text-sm">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-black text-white">${plan.price}</span>
                  <span className="text-gray-300 text-sm ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-100">
                      <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                {plan.link ? (
                  <a
                    href={plan.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block py-3 rounded-full text-center font-bold text-sm transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 glow-purple"
                        : "border border-purple-700/50 text-white hover:bg-purple-900/30"
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <button
                    className={`py-3 rounded-full text-center font-bold text-sm transition-all ${
                      plan.highlight
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90 glow-purple"
                        : "border border-purple-700/50 text-white hover:bg-purple-900/30"
                    }`}
                  >
                    {plan.cta}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer Sale Banner */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto">
          <div className="relative rounded-2xl bg-[#12121a] border border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.15)] p-10 text-center">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold tracking-widest uppercase">
              Limited Time Offer
            </span>
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
      </section>
    </div>
  );
}
