import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Clipbun.io",
  description: "Read the Clipbun.io Terms of Service.",
};

const LAST_UPDATED = "May 13, 2026";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using Clipbun.io (the "Site") and purchasing any digital products offered here, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site. We reserve the right to update these Terms at any time; continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.`,
  },
  {
    title: "2. Products & Digital Licenses",
    body: `All clips, thumbnails, and other digital assets sold on Clipbun.io are licensed, not sold. Upon completing a purchase you receive a non-exclusive, non-transferable license to use the purchased asset for personal or commercial content creation (e.g., TikTok, YouTube). You may not resell, redistribute, sublicense, or repackage any asset as a standalone product or within another digital product marketplace.`,
  },
  {
    title: "3. Intellectual Property",
    body: `All original content on this Site — including but not limited to site design, text, graphics, logos, and original edits — is the property of Clipbun.io and is protected by applicable copyright and intellectual property laws. Anime source material remains the property of its respective rights holders. Clipbun.io does not claim ownership of underlying anime intellectual property.`,
  },
  {
    title: "4. Payments & Refunds",
    body: `All purchases are processed securely. Because our products are digital and delivered instantly upon payment, all sales are final and non-refundable unless the file delivered is corrupted or materially different from its description. If you experience an issue with your order, please contact us within 7 days of purchase and we will work to resolve it promptly.`,
  },
  {
    title: "5. Prohibited Uses",
    body: `You agree not to: (a) use any asset in a manner that violates applicable laws or third-party rights; (b) use automated systems to scrape, crawl, or download content from the Site without express written permission; (c) attempt to gain unauthorized access to any portion of the Site or its related systems; (d) use purchased assets in content that is hateful, defamatory, or otherwise harmful.`,
  },
  {
    title: "6. Disclaimers",
    body: `The Site and its products are provided "as is" without warranties of any kind, express or implied. Clipbun.io does not warrant that the Site will be uninterrupted, error-free, or free of viruses. Your use of the Site and any downloaded content is at your sole risk.`,
  },
  {
    title: "7. Limitation of Liability",
    body: `To the maximum extent permitted by law, Clipbun.io and its owners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site or its products, even if advised of the possibility of such damages. Our total liability to you for any claim shall not exceed the amount you paid for the relevant product.`,
  },
  {
    title: "8. Third-Party Links",
    body: `The Site may contain links to third-party websites (e.g., social media platforms). These links are provided for convenience only. Clipbun.io has no control over, and assumes no responsibility for, the content or practices of any third-party sites.`,
  },
  {
    title: "9. Governing Law",
    body: `These Terms shall be governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be resolved through good-faith negotiation. If a dispute cannot be resolved informally, it shall be submitted to binding arbitration in accordance with applicable arbitration rules.`,
  },
  {
    title: "10. Contact",
    body: `If you have any questions about these Terms, please visit our `,
    link: { label: "Contact Us", href: "/contact" },
    bodyEnd: " page and send us a message.",
  },
];

export default function TermsPage() {
  return (
    <section className="min-h-screen px-4 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Please read these Terms carefully before using Clipbun.io. By purchasing
            or downloading any content, you agree to the following terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div
              key={s.title}
              className="bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-white font-bold text-lg mb-3">{s.title}</h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {s.body}
                {s.link && (
                  <Link
                    href={s.link.href}
                    className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
                  >
                    {s.link.label}
                  </Link>
                )}
                {s.bodyEnd}
              </p>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block py-3 px-8 rounded-xl font-bold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-200 shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
