import { motion, easeOut } from "framer-motion";
import { COLORS, PROJECTS, type Project } from "./home-data";
import { SectionHeading } from "./section-heading";

function ProjectMock({ project }: { project: Project }) {
  const accent = project.accent === "gold" ? COLORS.accentGold : COLORS.accentBlue;
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border"
      style={{ borderColor: COLORS.border, background: COLORS.bgSecondary }}
    >
      <div className="flex items-center gap-1.5 border-b px-4 py-3" style={{ borderColor: COLORS.border }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#DC2626" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#D4AF37" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#16A34A" }} />
      </div>
      {project.image ? (
        <div className="w-full">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="w-full h-auto object-contain"
          />
        </div>
      ) : (
        <div className="grid h-full grid-cols-3 gap-3 p-5">
          <div className="col-span-1 space-y-3">
            <div className="h-3 w-3/4 rounded-full" style={{ background: "rgba(15,23,42,0.1)" }} />
            <div className="h-16 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
            <div className="h-16 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
          </div>
          <div className="col-span-2 space-y-3">
            <div className="h-24 rounded-lg" style={{ background: `${accent}22`, border: `1px solid ${accent}55` }} />
            <div className="grid grid-cols-3 gap-3">
              <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
              <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
              <div className="h-14 rounded-lg" style={{ background: "rgba(15,23,42,0.05)" }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = project.accent === "gold" ? COLORS.accentGold : COLORS.accentBlue;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: easeOut, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border p-6 sm:p-10"
      style={{ borderColor: COLORS.border, background: COLORS.card }}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <ProjectMock project={project} />
        </div>
        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
          {project.domain && (
            <span
              className="mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
              style={{ borderColor: `${accent}55`, color: accent }}
            >
              {project.domain}
            </span>
          )}
          <h3 className="mb-5 text-3xl font-semibold tracking-tight" style={{ color: COLORS.textPrimary }}>
            {project.name}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                THE CHALLENGE
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.problem}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                WHAT WE BUILT
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.solution}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wide" style={{ color: COLORS.textSecondary }}>
                THE RESULT
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: COLORS.textPrimary }}>
                {project.impact}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs font-medium"
                style={{ borderColor: COLORS.border, color: COLORS.textSecondary }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="work" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Real businesses. Real outcomes."
          description="We focus on solving the problems that actually hold growth back."
        />
        <div className="space-y-8">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
