"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import {
  AmbientBackground,
  Navbar,
  Footer,
  ScrollCtx,
} from "../page";

const COLORS = {
  bgPrimary: "#F8F9FA",
  card: "#FFFFFF",
  accentBlue: "#1E3A8A",
  accentGold: "#B8912E",
  textPrimary: "#1E3A8A",
  textSecondary: "#475569",
  border: "rgba(30,58,138,0.15)",
  success: "#16A34A",
};

function ContactField({
  label,
  name,
  type = "text",
  value,
  onChange,
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  required?: boolean;
}) {
  const common =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#C8962F]";
  return (
    <label className="block">
      <span
        className="mb-2 block text-xs font-semibold tracking-wide"
        style={{ color: COLORS.textSecondary }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          className={`${common} resize-none`}
          style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={common}
          style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
        />
      )}
    </label>
  );
}

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — show confirmation state.
    setSent(true);
  };

  return (
    <ScrollCtx.Provider value={{ scrolled }}>
      <div className="relative min-h-screen font-sans" style={{ color: COLORS.textPrimary }}>
        <AmbientBackground />
        <Navbar />
        <main className="px-6 pb-28 pt-36">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
            {/* left: intro + details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p
                className="mb-4 text-[13px] font-semibold tracking-[0.25em]"
                style={{ color: COLORS.accentGold }}
              >
                GET IN TOUCH
              </p>
              <h1
                className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
                style={{ color: COLORS.textPrimary }}
              >
                Let&apos;s build something that <span style={{ color: COLORS.accentGold }}>lasts.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
                Tell us about your project or book a free discovery call. We reply within two hours on business days.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href="mailto:hello@revonis.com"
                  className="flex items-center gap-3 rounded-2xl border px-5 py-4 transition-colors hover:bg-black/5"
                  style={{ borderColor: COLORS.border, background: COLORS.card }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(212,175,55,0.12)" }}
                  >
                    <Mail className="h-5 w-5" style={{ color: COLORS.accentGold }} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                      Email us
                    </span>
                    <span className="block text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                      hello@revonis.com
                    </span>
                  </span>
                </a>

                {/* TODO: replace placeholder address with real office details */}
                <div
                  className="flex items-center gap-3 rounded-2xl border px-5 py-4"
                  style={{ borderColor: COLORS.border, background: COLORS.card }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(212,175,55,0.12)" }}
                  >
                    <Phone className="h-5 w-5" style={{ color: COLORS.accentGold }} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                      Call us
                    </span>
                    <a
                      href="tel:+919558176527"
                      className="block text-sm font-semibold transition-colors hover:text-black/70"
                      style={{ color: COLORS.textPrimary }}
                    >
                      +91 9558176527
                    </a>
                    <a
                      href="tel:+917265924325"
                      className="block text-sm font-semibold transition-colors hover:text-black/70"
                      style={{ color: COLORS.textPrimary }}
                    >
                      +91 72659 24325
                    </a>
                  </span>
                </div>

                <div
                  className="flex items-center gap-3 rounded-2xl border px-5 py-4"
                  style={{ borderColor: COLORS.border, background: COLORS.card }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: "rgba(212,175,55,0.12)" }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: COLORS.accentGold }} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium" style={{ color: COLORS.textSecondary }}>
                      Our office
                    </span>
                    <span className="block text-sm font-semibold" style={{ color: COLORS.textPrimary }}>
                      Your Office Address, Street, City, Gujarat, India
                    </span>
                  </span>
                </div>

                <a
                  href="mailto:hello@revonis.com?subject=Discovery%20Call"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] sm:w-auto sm:inline-flex"
                  style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
                >
                  Book a Discovery Call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* right: form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="rounded-3xl border p-8"
              style={{ borderColor: COLORS.border, background: COLORS.card }}
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14" style={{ color: COLORS.success }} />
                  <h2 className="mt-6 text-2xl font-semibold" style={{ color: COLORS.textPrimary }}>
                    Thank you, {form.name || "friend"}!
                  </h2>
                  <p className="mt-3 max-w-sm text-sm" style={{ color: COLORS.textSecondary }}>
                    Your message is on its way. We&apos;ll get back to you at {form.email || "your email"} shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: "", email: "", message: "" });
                    }}
                    className="mt-8 rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/5"
                    style={{ borderColor: COLORS.border, color: COLORS.textPrimary }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <ContactField label="Your name" name="name" value={form.name} onChange={handleChange} required />
                  <ContactField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  <ContactField label="How can we help?" name="message" value={form.message} onChange={handleChange} textarea required />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
                    style={{ background: COLORS.accentGold, color: "#0A0E1F" }}
                  >
                    Send message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* office map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-12 max-w-6xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold" style={{ color: COLORS.textPrimary }}>
                Our office
              </h2>
              <a
                href="https://www.google.com/maps?q=23.073444,72.569222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold transition-colors hover:text-black/70"
                style={{ color: COLORS.accentGold }}
              >
                Open in Maps ↗
              </a>
            </div>
            <div
              className="relative rounded-[28px] p-[2px]"
              style={{ background: `linear-gradient(135deg, ${COLORS.accentBlue}, ${COLORS.accentGold})` }}
            >
              {/* decorative corner accents */}
              {[
                "left-3 top-3",
                "right-3 top-3",
                "left-3 bottom-3",
                "right-3 bottom-3",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`pointer-events-none absolute h-2.5 w-2.5 rounded-full ${pos}`}
                  style={{ background: COLORS.accentGold }}
                />
              ))}

              <div className="overflow-hidden rounded-[26px] bg-white">
                {/* TODO: replace the q= query below with your real office address or lat,lng */}
                <iframe
                  title="Revonis office location"
                  src="https://www.google.com/maps?q=23.073444,72.569222&z=15&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full sm:h-96"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </ScrollCtx.Provider>
  );
}
