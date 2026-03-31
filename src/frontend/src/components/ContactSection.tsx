import { Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent! I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputBase =
    "w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-200";

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Pink nebula glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, #f472b610 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #fbbf2410 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "#f472b6" }}
          >
            Get In Touch
          </p>
          <h2 className="section-title text-white">
            Let&apos;s Work{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f472b6, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Together
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s build something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">
                Moeed Rizwan Farooq
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Full Stack Developer &amp; AI Automation Expert &middot;
                Available for freelance and full-time roles.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:moeed@example.com"
                  data-ocid="contact.link"
                  className="flex items-center gap-4 glass-light rounded-xl p-4 transition-all group"
                  style={{ border: "1px solid #f472b625" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#f472b650";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 4px 20px #f472b620";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#f472b625";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "#f472b615",
                      border: "1px solid #f472b630",
                    }}
                  >
                    <Mail size={18} style={{ color: "#f472b6" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-white">
                      moeed@example.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/moeed-rizwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="flex items-center gap-4 glass-light rounded-xl p-4 transition-all group"
                  style={{ border: "1px solid #818cf825" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#818cf850";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 4px 20px #818cf820";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#818cf825";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "#818cf815",
                      border: "1px solid #818cf830",
                    }}
                  >
                    <Linkedin size={18} style={{ color: "#818cf8" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium text-white">
                      linkedin.com/in/moeed-rizwan
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.link"
                  className="flex items-center gap-4 glass-light rounded-xl p-4 transition-all group"
                  style={{ border: "1px solid #fbbf2425" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#fbbf2450";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 4px 20px #fbbf2420";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "#fbbf2425";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "#fbbf2415",
                      border: "1px solid #fbbf2430",
                    }}
                  >
                    <MessageCircle size={18} style={{ color: "#fbbf24" }} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">WhatsApp</p>
                    <p className="text-sm font-medium text-white">
                      +1 234 567 890
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                  className={inputBase}
                  style={{ border: "1px solid #f472b620" }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "#f472b655";
                    (e.target as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px #f472b615";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "#f472b620";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  data-ocid="contact.input"
                  className={inputBase}
                  style={{ border: "1px solid #fbbf2420" }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "#fbbf2455";
                    (e.target as HTMLInputElement).style.boxShadow =
                      "0 0 0 3px #fbbf2415";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor =
                      "#fbbf2420";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  rows={5}
                  data-ocid="contact.textarea"
                  className={`${inputBase} resize-none`}
                  style={{ border: "1px solid #f472b620" }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "#f472b655";
                    (e.target as HTMLTextAreaElement).style.boxShadow =
                      "0 0 0 3px #f472b615";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor =
                      "#f472b620";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                data-ocid="contact.submit_button"
                className="w-full text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 transition-all relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f472b6, #fbbf24)",
                  boxShadow: "0 0 25px #f472b640",
                }}
              >
                {sending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <button
                type="button"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                data-ocid="contact.primary_button"
                className="animate-pulse-glow text-white font-bold px-10 py-4 rounded-full text-lg relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #f472b6, #fbbf24, #fb923c)",
                  boxShadow: "0 0 30px #f472b650",
                }}
              >
                🚀 Hire Me Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
