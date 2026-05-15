import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  category: "clip" | "thumbnail";
  price: number;
  originalPrice?: number;
  tag?: string;
  duration?: string;
  resolution?: string;
  platform?: string[];
  coverColor?: string;
  buttonLabel?: string;
  image?: string;
  video?: string;
  titleAccent?: string;
  views?: string;
  externalHref?: string;
}

export default function ProductCard({
  id,
  title,
  category,
  price,
  buttonLabel,
  originalPrice,
  tag,
  duration,
  resolution,
  platform,
  coverColor = "from-purple-800 to-pink-700",
  image,
  video,
  titleAccent,
  views,
  externalHref,
}: ProductCardProps) {
  const href = externalHref ?? (category === "clip" ? `/clips/${id}` : `/thumbnails/${id}`);

  return (
    <Link href={href} className="group block" {...(externalHref ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <div className="card-hover rounded-2xl overflow-hidden bg-[#0f0f1a] border border-purple-900/20 hover:border-purple-500/50 transition-all duration-300">
        {/* Preview area */}
        <div className={`relative bg-gradient-to-br ${coverColor} aspect-video flex items-center justify-center overflow-hidden`}>
          {video ? (
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <>
              {/* Shimmer overlay */}
              <div className="absolute inset-0 shimmer opacity-60" />

              {/* Anime-style decorative background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                <div className="absolute bottom-2 left-2 w-20 h-20 rounded-full bg-pink-500/20 blur-xl" />
              </div>

              {category === "clip" ? (
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  {duration && <span className="text-white/80 text-xs font-medium">{duration}</span>}
                </div>
              ) : (
                <div className="relative z-10 text-center px-4">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  {resolution && <span className="text-white/80 text-xs font-medium">{resolution}</span>}
                </div>
              )}
            </>
          )}

          {/* Tag badge — always visible */}
          {tag && (
            <div className="absolute top-2 left-2 z-10">
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                {tag}
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1 group-hover:text-purple-300 transition-colors">
            {titleAccent
              ? <>{title.replace(titleAccent, "").trimEnd()} <span className="text-pink-400">{titleAccent}</span></>
              : title
            }
          </h3>

          {/* Platform tags */}
          {platform && platform.length > 0 && (
            <div className="flex gap-1 mb-3">
              {platform.map((p) => (
                <span key={p} className="px-2 py-0.5 rounded-full text-xs bg-purple-900/40 text-purple-300 border border-purple-800/40">
                  {p}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-base">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-gray-500 text-sm line-through">${originalPrice.toFixed(2)}</span>
              )}
            </div>
            {views && (
              <span className="text-gray-400 text-xs flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                {views}
              </span>
            )}
            <button className={`px-3 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 transition-opacity text-white ${buttonLabel === "Creator" ? "bg-gradient-to-r from-yellow-500 to-amber-400 text-black" : "bg-gradient-to-r from-purple-600 to-pink-500"}`}>
              {buttonLabel ?? (category === "thumbnail" ? "Pro Plan" : "Buy Now")}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
