import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ — Clipbun.io",
  description: "Frequently asked questions about Clipbun.io anime clips and thumbnails.",
};

const faqs = [
  {
    category: "Orders & Downloads",
    items: [
      {
        q: "How do I download my purchase?",
        a: "After your payment is confirmed you will receive an email with a download link. You can also access your files from your account dashboard at any time.",
      },
      {
        q: "How long do I have access to my downloaded files?",
        a: "Forever. Once you purchase a clip or thumbnail it is yours to keep. Your download link does not expire.",
      },
      {
        q: "What file formats are included?",
        a: "Anime clips are delivered as MP4 (H.264) files ready for TikTok and YouTube. Thumbnails are delivered as PNG and PSD files at 1280×720.",
      },
      {
        q: "Can I re-download a file if I lose it?",
        a: "Yes. Log in to your account and visit your order history to re-download any previously purchased file at no extra charge.",
      },
    ],
  },
  {
    category: "Licensing & Usage",
    items: [
      {
        q: "Can I use the clips on TikTok and YouTube?",
        a: "Yes. Every purchase includes a commercial content-creation license covering TikTok, YouTube, Instagram Reels, and similar platforms.",
      },
      {
        q: "Can I resell or redistribute the clips?",
        a: "No. The license is for your own content only. Reselling, redistributing, or repackaging our assets — including uploading them to other marketplaces — is strictly prohibited.",
      },
      {
        q: "Will my videos get copyright strikes?",
        a: "Our clips are pre-edited with original transitions and effects to minimise the risk of automated content ID claims. However, underlying anime source material remains the property of its respective studios, and we cannot guarantee zero claims on all platforms.",
      },
      {
        q: "Can I use a clip in a commercial advertisement?",
        a: "Please contact us before using any asset in a paid advertisement or brand deal campaign so we can clarify the scope of the license for your specific use case.",
      },
    ],
  },
  {
    category: "Payments & Refunds",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards (Visa, Mastercard, Amex) as well as Apple Pay and Google Pay, processed securely via Stripe.",
      },
      {
        q: "Do you offer refunds?",
        a: "Because our products are digital and delivered instantly, all sales are final. If your file is corrupted or differs materially from its description, contact us within 7 days and we will make it right.",
      },
      {
        q: "Are there any subscription plans?",
        a: "We currently sell individual assets. Bundle and subscription plans are coming soon — check our Pricing page for updates.",
      },
    ],
  },
  {
    category: "Custom & Bulk Orders",
    items: [
      {
        q: "Can you create custom clips or thumbnails for me?",
        a: "Yes! We offer custom editing services. Head over to our Contact page and describe what you need — anime, style, duration, and any branding details — and we will send you a quote.",
      },
      {
        q: "Do you offer discounts for bulk purchases?",
        a: "Yes. If you need 10 or more assets, reach out via the Contact page for a bulk pricing quote.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "What resolution are the clips?",
        a: "All clips are 1080p (1920×1080) or 4K (3840×2160) where specified. The product listing will always state the exact resolution.",
      },
      {
        q: "Are the clips optimised for vertical (9:16) format?",
        a: "Yes. Clips marked as 'TikTok' are pre-cropped and optimised for 9:16 vertical viewing. Clips marked 'YouTube' are 16:9 widescreen.",
      },
      {
        q: "I'm having trouble playing the file. What should I do?",
        a: "Make sure you are using an up-to-date media player such as VLC or the native player on your device. If the problem persists, contact us and we will send a replacement file.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <section className="min-h-screen px-4 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2">
              Contact us
            </Link>{" "}
            and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-gray-300 font-bold text-xl mb-4 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 inline-block" />
                {cat.category}
              </h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-[#0f0f1a] border border-purple-900/30 rounded-2xl overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none text-gray-300 font-medium text-sm sm:text-base hover:text-purple-300 transition-colors">
                      {item.q}
                      {/* chevron */}
                      <svg
                        className="w-4 h-4 flex-shrink-0 text-purple-400 transition-transform duration-200 group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-purple-900/20 pt-4">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-8">
          <h3 className="text-gray-300 font-bold text-lg mb-2">Still have questions?</h3>
          <p className="text-gray-400 text-sm mb-5">
            Our team is happy to help with anything not covered above.
          </p>
          <Link
            href="/contact"
            className="inline-block py-3 px-8 rounded-xl font-bold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-200 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
