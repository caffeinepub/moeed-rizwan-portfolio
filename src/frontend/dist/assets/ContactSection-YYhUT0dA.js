import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, h as ue } from "./index-BHvqWtiJ.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
function ContactSection() {
  const [form, setForm] = reactExports.useState({ name: "", email: "", message: "" });
  const [sending, setSending] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    ue.success("Message sent! I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };
  const inputBase = "w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder:text-muted-foreground focus:outline-none transition-all duration-200";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "contact",
      className: "py-24 px-4 sm:px-6 relative overflow-hidden",
      style: { background: "transparent" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 50% at 50% 100%, #f472b610 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none",
            style: {
              background: "radial-gradient(circle, #fbbf2410 0%, transparent 70%)",
              filter: "blur(60px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, margin: "-80px" },
              transition: { duration: 0.6 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-medium tracking-[0.2em] uppercase mb-3",
                    style: { color: "#f472b6" },
                    children: "Get In Touch"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-white", children: [
                  "Let's Work",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      style: {
                        background: "linear-gradient(135deg, #f472b6, #fbbf24)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      children: "Together"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3 max-w-xl mx-auto", children: "Have a project in mind? Let's build something extraordinary." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.7 },
                className: "space-y-6",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 sm:p-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Moeed Rizwan Farooq" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-6", children: "Full Stack Developer & AI Automation Expert · Available for freelance and full-time roles." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "mailto:moeed@example.com",
                        "data-ocid": "contact.link",
                        className: "flex items-center gap-4 glass-light rounded-xl p-4 transition-all group",
                        style: { border: "1px solid #f472b625" },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.borderColor = "#f472b650";
                          e.currentTarget.style.boxShadow = "0 4px 20px #f472b620";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.borderColor = "#f472b625";
                          e.currentTarget.style.boxShadow = "none";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              style: {
                                background: "#f472b615",
                                border: "1px solid #f472b630"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, style: { color: "#f472b6" } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Email" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: "moeed@example.com" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "https://linkedin.com/in/moeed-rizwan",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": "contact.link",
                        className: "flex items-center gap-4 glass-light rounded-xl p-4 transition-all group",
                        style: { border: "1px solid #818cf825" },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.borderColor = "#818cf850";
                          e.currentTarget.style.boxShadow = "0 4px 20px #818cf820";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.borderColor = "#818cf825";
                          e.currentTarget.style.boxShadow = "none";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              style: {
                                background: "#818cf815",
                                border: "1px solid #818cf830"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18, style: { color: "#818cf8" } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "LinkedIn" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: "linkedin.com/in/moeed-rizwan" })
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "a",
                      {
                        href: "https://wa.me/1234567890",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "data-ocid": "contact.link",
                        className: "flex items-center gap-4 glass-light rounded-xl p-4 transition-all group",
                        style: { border: "1px solid #fbbf2425" },
                        onMouseEnter: (e) => {
                          e.currentTarget.style.borderColor = "#fbbf2450";
                          e.currentTarget.style.boxShadow = "0 4px 20px #fbbf2420";
                        },
                        onMouseLeave: (e) => {
                          e.currentTarget.style.borderColor = "#fbbf2425";
                          e.currentTarget.style.boxShadow = "none";
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                              style: {
                                background: "#fbbf2415",
                                border: "1px solid #fbbf2430"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 18, style: { color: "#fbbf24" } })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "WhatsApp" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white", children: "+1 234 567 890" })
                          ] })
                        ]
                      }
                    )
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, margin: "-80px" },
                transition: { duration: 0.7 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: handleSubmit,
                      className: "glass rounded-2xl p-6 sm:p-8 space-y-5",
                      "data-ocid": "contact.modal",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "contact-name",
                              className: "text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2",
                              children: "Your Name"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "contact-name",
                              type: "text",
                              placeholder: "John Doe",
                              value: form.name,
                              onChange: (e) => setForm((p) => ({ ...p, name: e.target.value })),
                              required: true,
                              "data-ocid": "contact.input",
                              className: inputBase,
                              style: { border: "1px solid #f472b620" },
                              onFocus: (e) => {
                                e.target.style.borderColor = "#f472b655";
                                e.target.style.boxShadow = "0 0 0 3px #f472b615";
                              },
                              onBlur: (e) => {
                                e.target.style.borderColor = "#f472b620";
                                e.target.style.boxShadow = "none";
                              }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "contact-email",
                              className: "text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2",
                              children: "Email Address"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "contact-email",
                              type: "email",
                              placeholder: "john@example.com",
                              value: form.email,
                              onChange: (e) => setForm((p) => ({ ...p, email: e.target.value })),
                              required: true,
                              "data-ocid": "contact.input",
                              className: inputBase,
                              style: { border: "1px solid #fbbf2420" },
                              onFocus: (e) => {
                                e.target.style.borderColor = "#fbbf2455";
                                e.target.style.boxShadow = "0 0 0 3px #fbbf2415";
                              },
                              onBlur: (e) => {
                                e.target.style.borderColor = "#fbbf2420";
                                e.target.style.boxShadow = "none";
                              }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "contact-message",
                              className: "text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2",
                              children: "Message"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              id: "contact-message",
                              placeholder: "Tell me about your project...",
                              value: form.message,
                              onChange: (e) => setForm((p) => ({ ...p, message: e.target.value })),
                              required: true,
                              rows: 5,
                              "data-ocid": "contact.textarea",
                              className: `${inputBase} resize-none`,
                              style: { border: "1px solid #f472b620" },
                              onFocus: (e) => {
                                e.target.style.borderColor = "#f472b655";
                                e.target.style.boxShadow = "0 0 0 3px #f472b615";
                              },
                              onBlur: (e) => {
                                e.target.style.borderColor = "#f472b620";
                                e.target.style.boxShadow = "none";
                              }
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "button",
                          {
                            type: "submit",
                            disabled: sending,
                            "data-ocid": "contact.submit_button",
                            className: "w-full text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 transition-all relative overflow-hidden",
                            style: {
                              background: "linear-gradient(135deg, #f472b6, #fbbf24)",
                              boxShadow: "0 0 25px #f472b640"
                            },
                            children: sending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                              "Sending..."
                            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 }),
                              "Send Message"
                            ] })
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { delay: 0.3, duration: 0.5 },
                      className: "mt-6 text-center",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            var _a;
                            (_a = document.querySelector("#contact")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                          },
                          "data-ocid": "contact.primary_button",
                          className: "animate-pulse-glow text-white font-bold px-10 py-4 rounded-full text-lg relative overflow-hidden",
                          style: {
                            background: "linear-gradient(135deg, #f472b6, #fbbf24, #fb923c)",
                            boxShadow: "0 0 30px #f472b650"
                          },
                          children: "🚀 Hire Me Now"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
export {
  ContactSection as default
};
