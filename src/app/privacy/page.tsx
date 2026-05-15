import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Clipbun.io",
  description: "Read the Clipbun.io Privacy Policy.",
};

const LAST_UPDATED = "May 13, 2026";

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you use Clipbun.io we may collect the following types of information:

• **Account & Purchase Data** — name, email address, and billing information provided when you make a purchase.
• **Usage Data** — pages visited, time spent on the Site, browser type, device type, and IP address collected automatically via cookies and similar technologies.
• **Communications** — messages you send us through the Contact page or by email.

We do not collect sensitive personal data such as government ID numbers, health information, or financial account credentials beyond what is required to process a payment through our secure payment processor.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to:

• Process and fulfil your orders and deliver purchased digital assets.
• Send order confirmations and customer-support responses.
• Improve and personalise your experience on the Site.
• Analyse usage trends to fix bugs and optimise performance.
• Comply with legal obligations and enforce our Terms of Service.

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    title: "3. Cookies & Tracking Technologies",
    body: `Clipbun.io uses cookies and similar tracking technologies (e.g., local storage, pixel tags) to:

• Keep you logged in and remember your preferences.
• Understand how visitors navigate the Site (analytics).
• Measure the effectiveness of any promotional content.

You can control cookies through your browser settings. Disabling cookies may affect certain features of the Site. By continuing to use the Site you consent to our use of cookies as described here.`,
  },
  {
    title: "4. Sharing Your Information",
    body: `We may share your information with:

• **Payment Processors** — to securely handle transactions (e.g., Stripe). These providers are bound by their own privacy policies and are not permitted to use your data for unrelated purposes.
• **Analytics Providers** — anonymised usage data may be shared with services such as Google Analytics.
• **Legal Authorities** — when required to do so by law, court order, or governmental authority, or to protect the rights and safety of Clipbun.io and its users.

No other third-party sharing takes place without your explicit consent.`,
  },
  {
    title: "5. Data Retention",
    body: `We retain your personal data only for as long as necessary to fulfil the purposes described in this Policy or as required by law. Purchase records may be kept for up to 7 years for accounting and tax compliance purposes. You may request deletion of your data at any time (see Section 7).`,
  },
  {
    title: "6. Data Security",
    body: `We implement industry-standard security measures — including HTTPS encryption, access controls, and regular security reviews — to protect your personal information from unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Your Rights",
    body: `Depending on your location, you may have the right to:

• **Access** — request a copy of the personal data we hold about you.
• **Correction** — ask us to correct inaccurate or incomplete data.
• **Deletion** — request that we delete your personal data ("right to be forgotten").
• **Portability** — receive your data in a structured, machine-readable format.
• **Objection** — object to certain types of processing, including direct marketing.

To exercise any of these rights, please contact us through the Contact page. We will respond within 30 days.`,
  },
  {
    title: "8. Children's Privacy",
    body: `Clipbun.io is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to delete that information.`,
  },
  {
    title: "9. Third-Party Links",
    body: `The Site may contain links to external websites (e.g., TikTok, YouTube, payment portals). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this Policy periodically. Your continued use of the Site after any changes constitutes your acceptance of the updated Policy.`,
  },
  {
    title: "11. Contact Us",
    body: `If you have any questions, concerns, or requests regarding this Privacy Policy, please visit our `,
    link: { label: "Contact Us", href: "/contact" },
    bodyEnd: " page and send us a message. We take your privacy seriously and will respond promptly.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="min-h-screen px-4 py-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">Last updated: {LAST_UPDATED}</p>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Your privacy matters to us. This Policy explains what data we collect,
            how we use it, and the choices you have.
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
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base whitespace-pre-line">
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
