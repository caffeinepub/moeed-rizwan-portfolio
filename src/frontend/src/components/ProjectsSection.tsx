import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const RAINBOW = [
  "#00d4ff",
  "#a855f7",
  "#f472b6",
  "#fbbf24",
  "#34d399",
  "#818cf8",
  "#fb923c",
];

const SCREENSHOT_BASE =
  "https://image.thum.io/get/width/600/crop/350/noanimate/";

const PROJECTS = [
  {
    name: "Elite Horizon Tourism",
    url: "https://elitehorizontourism.com/",
    desc: "Full-featured travel & tourism booking platform with destination discovery and seamless trip planning.",
    tags: ["Travel", "Booking", "Full Stack"],
  },
  {
    name: "Osama Mehmood CEO",
    url: "https://osama-mehmood-1-r3qv.vercel.app/",
    desc: "Executive personal brand website built to establish thought leadership and digital authority.",
    tags: ["Personal Brand", "Next.js"],
  },
  {
    name: "Fairy Wren Stories AI",
    url: "http://fairywrenstories.ai/",
    desc: "AI-powered children's storytelling app generating personalized, imaginative narratives.",
    tags: ["AI", "OpenAI", "React"],
  },
  {
    name: "Deep Tutor",
    url: "http://deep-tutor.vercel.app/",
    desc: "AI-powered tutoring platform delivering personalized learning experiences.",
    tags: ["AI", "EdTech", "Next.js"],
  },
  {
    name: "Institute of Ophthalmology",
    url: "http://institute-of-ophthalmology.vercel.app/",
    desc: "Professional medical institute website with appointment scheduling and staff profiles.",
    tags: ["Medical", "WordPress"],
  },
  {
    name: "Agency of Agencies",
    url: "http://agencyofagencies.vercel.app/",
    desc: "Marketing agency directory connecting businesses with specialized agencies worldwide.",
    tags: ["Directory", "Next.js"],
  },
  {
    name: "Custom Boxes Canada",
    url: "https://www.customboxescanada.ca/",
    desc: "Custom packaging e-commerce platform with design tools and bulk ordering.",
    tags: ["E-commerce", "WooCommerce", "WordPress"],
  },
  {
    name: "Peeraan",
    url: "https://peeraan.com/",
    desc: "Online marketplace connecting buyers and sellers with a seamless transaction experience.",
    tags: ["Marketplace", "Shopify"],
  },
  {
    name: "Chor Bazar",
    url: "https://chorbazar.pk/",
    desc: "Pakistan's popular classifieds and marketplace for buying and selling goods.",
    tags: ["Classifieds", "Shopify", "E-commerce"],
  },
  {
    name: "Premium Packaging America",
    url: "https://premiumpackagingamerica.com/",
    desc: "Premium packaging solutions e-commerce with custom branding and fast shipping.",
    tags: ["E-commerce", "WooCommerce", "WordPress"],
  },
  {
    name: "Transvision Immigration",
    url: "https://www.transvisionimmigration.com/",
    desc: "Immigration consultancy platform streamlining visa applications and case management.",
    tags: ["Immigration", "WordPress"],
  },
  {
    name: "eFone",
    url: "https://efone.app/",
    desc: "Modern VoIP communication app with HD calling and team collaboration features.",
    tags: ["VoIP", "WordPress"],
  },
  {
    name: "OneVision",
    url: "https://onevision.io/",
    desc: "Tech solutions SaaS platform empowering businesses with scalable digital infrastructure.",
    tags: ["SaaS", "Tech", "Next.js"],
  },
  {
    name: "Lazzat",
    url: "https://www.lazzat.ca/",
    desc: "Canadian food and restaurant brand with online ordering and menu management.",
    tags: ["Food", "React", "Vite", "TypeScript"],
  },
  {
    name: "Sonic Accountants",
    url: "https://www.sonicaccountants.com/",
    desc: "Accounting and financial services platform with automated reporting and client portal.",
    tags: ["Finance", "TypeScript", "Vite"],
  },
];

const TAG_COLORS: Record<string, string> = {
  AI: "#00d4ff",
  "Full Stack": "#00d4ff",
  MERN: "#00d4ff",
  React: "#34d399",
  "Next.js": "#818cf8",
  "E-commerce": "#a855f7",
  SaaS: "#f472b6",
  Travel: "#fbbf24",
  Booking: "#fb923c",
  OpenAI: "#34d399",
  EdTech: "#818cf8",
  "Personal Brand": "#f472b6",
  "Web Design": "#a855f7",
  Shopify: "#34d399",
  "Real Estate": "#fbbf24",
  Medical: "#34d399",
  WordPress: "#818cf8",
  WooCommerce: "#a855f7",
  Telecom: "#fb923c",
  Directory: "#f472b6",
  Packaging: "#fbbf24",
  Marketplace: "#00d4ff",
  Classifieds: "#fb923c",
  Immigration: "#818cf8",
  VoIP: "#34d399",
  "Real-time": "#f472b6",
  Tech: "#00d4ff",
  Food: "#fb923c",
  Finance: "#fbbf24",
  TypeScript: "#00d4ff",
  Vite: "#f472b6",
};

function getTagColor(tag: string): string {
  return TAG_COLORS[tag] ?? "#818cf8";
}

function ProjectThumbnail({
  url,
  name,
  color,
}: {
  url: string;
  name: string;
  color: string;
}) {
  const [failed, setFailed] = useState(false);

  const screenshotUrl = `${SCREENSHOT_BASE}${url}`;

  if (failed) {
    return (
      <div
        className="w-full flex items-center justify-center"
        style={{
          height: "160px",
          background: `linear-gradient(135deg, ${color}20, ${color}08)`,
          borderBottom: `1px solid ${color}20`,
        }}
      >
        <span className="text-5xl font-black" style={{ color, opacity: 0.5 }}>
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden group/thumb"
      style={{ height: "160px" }}
    >
      <img
        src={screenshotUrl}
        alt={`Screenshot of ${name}`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300"
        style={{ background: "rgba(0,0,0,0.65)" }}
      >
        <span
          className="flex items-center gap-2 text-sm font-semibold"
          style={{ color }}
        >
          Visit Site <ExternalLink size={14} />
        </span>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, #a855f710 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-medium tracking-[0.2em] uppercase mb-3"
            style={{ color: "#818cf8" }}
          >
            Portfolio
          </p>
          <h2 className="section-title text-white">
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            15 production-grade applications shipped for clients worldwide.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          data-ocid="projects.list"
        >
          {PROJECTS.map((project, i) => {
            const color = RAINBOW[i % RAINBOW.length];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 6) * 0.07, duration: 0.5 }}
                whileHover={{ rotateX: 3, rotateY: 5, y: -6, scale: 1.02 }}
                data-ocid={`projects.item.${i + 1}`}
                className="glass rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300"
                style={{
                  border: `1px solid ${color}15`,
                  transformPerspective: 1000,
                  transformStyle: "preserve-3d",
                }}
                onClick={() =>
                  window.open(project.url, "_blank", "noopener,noreferrer")
                }
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 8px 40px ${color}25`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    `${color}15`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Screenshot thumbnail */}
                <ProjectThumbnail
                  url={project.url}
                  name={project.name}
                  color={color}
                />

                {/* Card content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className="text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${color}15`,
                        color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      #{String(i + 1).padStart(2, "0")}
                    </span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color }}
                    />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md font-medium"
                        style={{
                          background: `${getTagColor(tag)}15`,
                          color: getTagColor(tag),
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className="flex items-center gap-1 text-xs font-semibold"
                    style={{ color }}
                  >
                    Visit Live Site
                    <ExternalLink size={11} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
