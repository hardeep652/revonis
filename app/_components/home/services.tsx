import { motion, easeOut } from "framer-motion";
import { COLORS, SERVICES, type Service } from "./home-data";
import { SectionHeading } from "./section-heading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.06, ease: easeOut },
        },
        hover: {
          y: -4,
          borderColor: "rgba(212,175,55,0.4)",
          transition: { duration: 0.2, ease: "easeOut" },
        },
      }}
      className="rounded-2xl border p-7"
      style={{ borderColor: COLORS.border, background: COLORS.card }}
    >
      <div
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "rgba(212,175,55,0.1)" }}
      >
        <Icon className="h-5 w-5" style={{ color: COLORS.accentGold }} />
      </div>
      <h3 className="mb-2.5 text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
        {service.title}
      </h3>
      <p className="mb-3 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        {service.description}
      </p>
      <p className="text-sm font-medium leading-relaxed" style={{ color: COLORS.accentGold }}>
        {service.value}
      </p>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-6 py-28" style={{ background: "transparent" }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SERVICES"
          title="What we actually help with."
          description="Practical solutions for the challenges most growing businesses face."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}