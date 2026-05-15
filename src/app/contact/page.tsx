import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Clipbun.io",
  description: "Get in touch with the Clipbun.io team.",
};

export default function ContactPage() {
  // Replace with your Gmail address
  const GMAIL = "Clipbun.io@gmail.com";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold gradient-text mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Have a question, a custom request, or just want to say hi? We&apos;d
            love to hear from you. Reach out and we&apos;ll get back to you as
            soon as possible.
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0f0f1a] border border-purple-900/30 rounded-2xl p-8 shadow-xl glow-purple">
          {/* Info rows */}
          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Email</p>
                <p className="text-white font-medium">{GMAIL}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">Response Time</p>
                <p className="text-white font-medium">Within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="mt-1 flex-shrink-0 w-9 h-9 rounded-lg bg-purple-900/40 flex items-center justify-center text-purple-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </span>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">What we can help with</p>
                <p className="text-white font-medium">
                  Custom clips, bulk orders, licensing, billing &amp; general questions
                </p>
              </div>
            </div>
          </div>

          {/* Gmail CTA button */}
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${GMAIL}&su=Clipbun.io%20Inquiry`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 px-6 rounded-xl font-bold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              transition-all duration-200 shadow-lg hover:shadow-pink-500/25
              glow-purple"
          >
            Send us an Email
          </a>

          <p className="text-center text-xs text-gray-600 mt-4">
            Opens Gmail in a new tab
          </p>
        </div>
      </div>
    </section>
  );
}
