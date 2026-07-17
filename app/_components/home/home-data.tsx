import type { ElementType } from "react";
import {
  Boxes,
  ClipboardCheck,
  Code2,
  Cpu,
  FileCode2,
  Gauge,
  GitBranch,
  Hammer,
  Layers,
  LifeBuoy,
  MessageSquare,
  PenTool,
  Radar,
  Rocket,
  Search,
  ShieldCheck,
  TestTube2,
  Timer,
  Workflow,
  Zap,
} from "lucide-react";
import {
  SiSpringboot,
  SiNextdotjs,
  SiReact,
  SiApachekafka,
  SiRedis,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiLangchain,
  SiTensorflow,
  SiNodedotjs,
  SiPrisma,
  SiHibernate,
  SiKotlin,
  SiGoogleplay,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiRedux,
  SiSass,
  SiVite,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiGraphql,
  SiMui,
  SiBootstrap,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiGo,
  SiPhp,
  SiLaravel,
  SiDotnet,
  SiMysql,
  SiMongodb,
  SiNestjs,
  SiRabbitmq,
  SiRubyonrails,
  SiKtor,
  SiElasticsearch,
  SiFirebase,
  SiSupabase,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiGitlab,
  SiAnsible,
  SiNginx,
  SiGooglecloud,
  SiCloudflare,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiCircleci,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiPytorch,
  SiHuggingface,
  SiOpenaigym,
  SiOpencv,
  SiScikitlearn,
  SiSpacy,
  SiRasa,
  SiOllama,
  SiFlutter,
  SiSwift,
  SiGradle,
  SiXml,
  SiSemrush,
  SiYoast,
  SiPagespeedinsights,
  SiSelenium,
  SiCypress,
  SiPostman,
  SiJest,
  SiAppium,
  SiTestrail,
  SiApachejmeter,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiSonar,
} from "react-icons/si";
import { FaJava, FaAws, FaAndroid, FaGoogle, FaSearch, FaBug, FaCheckCircle } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

export const COLORS = {
  bgPrimary: "#F8F9FA",
  bgSecondary: "#F1F3F5",
  card: "#FFFFFF",
  accentBlue: "#1E3A8A",
  accentGold: "#B8912E",
  textPrimary: "#1E3A8A",
  textSecondary: "#475569",
  border: "rgba(30,58,138,0.15)",
  success: "#16A34A",
  error: "#DC2626",
};
/* -------------------------------------------------------------------------- */
/*  Shared data                                                               */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#why" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { label: "Projects Delivered", value: 40, suffix: "+" },
  { label: "Business Domains", value: 8, suffix: "" },
  { label: "Performance Score", value: 95, suffix: "+" },
  { label: "Avg. Response Time", value: 2, suffix: "h" },
  { label: "Source Code Ownership", value: 100, suffix: "%" },
  { label: "Long-Term Support", value: 12, suffix: "mo" },
];

export type Project = {
  name: string;
  domain: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  accent: "gold" | "blue";
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Nirmaan Academy",
    domain: "",
    problem:
      "Nirmaan Academy, an engineering coaching institute in Ahmedabad, needed a modern digital storefront for its 10-year milestone — to attract DDCET, diploma, and degree students, showcase results, share study resources, and turn admission inquiries into real leads.",
    solution:
      "We built a clean, modern website with an eye-catching animated homepage, a study-resource section with video lessons and downloadable materials, a simple admission inquiry form that connects students directly on WhatsApp, a results page showing past rankers, and an easy admin panel for the team to manage everything.",
    impact:
      "A complete digital presence that attracts prospective students, showcases results and testimonials, offers free resources, and converts inquiries into WhatsApp leads.",
    tech: [],
    accent: "gold",
    image: "/RN.png",
  },
];

export type Service = {
  icon: ElementType;
  title: string;
  description: string;
  value: string;
};

export const SERVICES: Service[] = [
  {
    icon: Rocket,
    title: "Get More Admissions",
    description:
      "Good leads come in, but too many never finish the application. We build straightforward enrollment sites and systems that make it easy for families to apply and easy for your team to follow up.",
    value: "Higher conversion from interest to enrollment with less manual work.",
  },
  {
    icon: Layers,
    title: "Professional Business Websites",
    description:
      "A generic site undersells the quality of your work. We design and build websites that look professional, load fast, and clearly communicate what you do.",
    value: "A website visitors trust within seconds.",
  },
  {
    icon: Workflow,
    title: "Automate Repetitive Tasks",
    description:
      "Manual processes quietly eat your team's week. We create simple automations that remove the boring, error-prone steps from daily work.",
    value: "More time for the work that actually moves your business forward.",
  },
  {
    icon: Code2,
    title: "Custom Business Tools",
    description:
      "Off-the-shelf software is close, but never quite fits how you actually operate. We build tools designed around your real workflows and team.",
    value: "Software that supports your business instead of forcing you to adapt to it.",
  },
  {
    icon: Cpu,
    title: "Practical AI Features",
    description:
      "AI sounds promising, but most attempts stay experimental and never deliver real results. We add focused AI capabilities that solve specific problems inside your existing systems.",
    value: "Automation that works reliably day after day.",
  },
  {
    icon: Boxes,
    title: "Systems That Grow With You",
    description:
      "As your business grows, older systems start slowing you down and creating new problems. We build or improve platforms that handle more volume without breaking.",
    value: "Reliable infrastructure you can depend on as you expand.",
  },
];
export const PROCESS_STEPS = [
  { icon: Search, title: "Discovery", desc: "We talk through your goals, current challenges, and what success looks like for you." },
  { icon: Radar, title: "Research", desc: "We study how your business works today and what needs to change." },
  { icon: PenTool, title: "Design", desc: "We create clear interfaces and a solid plan for the system behind them." },
  { icon: Hammer, title: "Build", desc: "We develop the solution using proven approaches that last." },
  { icon: TestTube2, title: "Testing", desc: "We check everything thoroughly so it works reliably in real conditions." },
  { icon: Rocket, title: "Launch", desc: "We put it live with monitoring and a clear plan if anything needs adjustment." },
  { icon: LifeBuoy, title: "Support", desc: "We stay available after launch to fix issues quickly and answer questions." },
];

export const WHY_REVONIS = [
  { icon: FileCode2, title: "Clear Pricing", desc: "You get a detailed scope and price upfront. No hidden costs later." },
  { icon: Layers, title: "Built to Last", desc: "We create systems that continue working well as your business grows." },
  { icon: ShieldCheck, title: "Security First", desc: "We build in proper controls and protection from the beginning." },
  { icon: GitBranch, title: "You Own Everything", desc: "The code and system belong to you completely." },
  { icon: Timer, title: "Ongoing Support", desc: "We're still here when you need help months after launch." },
  { icon: MessageSquare, title: "Regular Updates", desc: "You always know what's done and what comes next." },
];

export const CLIENT_JOURNEY = [
  { title: "Discovery Call", desc: "A direct conversation about your situation, goals, and timeline." },
  { title: "Proposal", desc: "A clear document outlining exactly what we'll build, how long it will take, and the investment." },
  { title: "Design Review", desc: "You see and give feedback on the proposed interfaces before any code is written." },
  { title: "Development", desc: "We build the system while keeping you informed of progress." },
  { title: "Weekly Updates", desc: "Short, regular check-ins so you always know the current status." },
  { title: "Testing", desc: "We test across devices and real scenarios before launch." },
  { title: "Deployment", desc: "We launch the system and make sure everything is running smoothly." },
  { title: "Ongoing Support", desc: "We remain available to resolve any issues that come up." },
];

export type TechItem = { name: string; icon: ElementType; color: string };
export type TechCategory = { label: string; items: TechItem[] };

export const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Sass", icon: SiSass, color: "#CC6699" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Svelte", icon: SiSvelte, color: "#FF3E00" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Material UI", icon: SiMui, color: "#0081CB" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Java", icon: FaJava, color: "#F89820" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Hibernate", icon: SiHibernate, color: "#9FB4BA" },
      { name: "JSP", icon: Code2, color: "#F89820" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: ".NET", icon: SiDotnet, color: "#512BD4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
      { name: "Ruby on Rails", icon: SiRubyonrails, color: "#CC0000" },
      { name: "Ktor", icon: SiKtor, color: "#7F52FF" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    label: "Data & Messaging",
    items: [
      { name: "Kafka", icon: SiApachekafka, color: "#5B6472" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#A78BFA" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "#FED10A" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "DynamoDB", icon: FaAws, color: "#FF9900" },
      { name: "gRPC", icon: SiGraphql, color: "#E10098" },
      { name: "SQL Server", icon: SiDotnet, color: "#512BD4" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Azure", icon: TbBrandAzure, color: "#0089D6" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
      { name: "Jenkins", icon: SiJenkins, color: "#D33833" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
      { name: "Helm", icon: SiHelm, color: "#0F1689" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", icon: SiGrafana, color: "#F46800" },
      { name: "CircleCI", icon: SiCircleci, color: "#343434" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    label: "AI & Automation",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "LangChain", icon: SiLangchain, color: "#4DB6AC" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "OpenAI", icon: SiOpenaigym, color: "#412991" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "spaCy", icon: SiSpacy, color: "#09A0D9" },
      { name: "Rasa", icon: SiRasa, color: "#563ACC" },
      { name: "Ollama", icon: SiOllama, color: "#FFFFFF" },
    ],
  },
  {
    label: "Android App Development",
    items: [
      { name: "Android", icon: FaAndroid, color: "#3DDC84" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Google Play", icon: SiGoogleplay, color: "#00B4FF" },
      { name: "Google", icon: FaGoogle, color: "#4285F4" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Swift", icon: SiSwift, color: "#F05138" },
      { name: "Gradle", icon: SiGradle, color: "#02303A" },
      { name: "XML Layouts", icon: SiXml, color: "#FF6600" },
    ],
  },
  {
    label: "SEO",
    items: [
      { name: "Search Optimization", icon: FaSearch, color: "#1E3A8A" },
      { name: "Keyword Research", icon: SiNextdotjs, color: "#111827" },
      { name: "Technical SEO", icon: SiTypescript, color: "#3178C6" },
      { name: "SEMrush", icon: SiSemrush, color: "#FF6421" },
      { name: "Yoast SEO", icon: SiYoast, color: "#A428B9" },
      { name: "PageSpeed Insights", icon: SiPagespeedinsights, color: "#4285F4" },
      { name: "Google Search Console", icon: SiGooglesearchconsole, color: "#4285F4" },
      { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" },
    ],
  },
  {
    label: "QA",
    items: [
      { name: "Manual Testing", icon: FaBug, color: "#DC2626" },
      { name: "Automation Testing", icon: SiPython, color: "#3776AB" },
      { name: "Quality Checks", icon: FaCheckCircle, color: "#16A34A" },
      { name: "Bug Tracking", icon: FaBug, color: "#F59E0B" },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
      { name: "Appium", icon: SiAppium, color: "#0089BD" },
      { name: "TestRail", icon: SiTestrail, color: "#6C2BD9" },
      { name: "JMeter", icon: SiApachejmeter, color: "#D22128" },
      { name: "SonarQube", icon: SiSonar, color: "#4E9BCD" },
    ],
  },
];

// Placeholder testimonials — replace with real, attributed client quotes
// before launch. Do not ship fabricated reviews.
export const TESTIMONIALS = [
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote: "REPLACE_WITH_REAL_QUOTE",
    name: "Client Name",
    role: "Title, Company",
  },
];

export const FAQS = [
  {
    q: "How long does a project take?",
    a: "Most projects take between six and twelve weeks. We give you a clear timeline in the proposal before any work starts.",
  },
  {
    q: "Who owns the code?",
    a: "You own it completely. The system and all code belong to your business with no ongoing licensing or restrictions.",
  },
  {
    q: "Can you work with our existing software?",
    a: "Yes. We often improve or replace parts of older systems while keeping your current operations running smoothly.",
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes. Every project includes a support period after launch. We can also set up longer-term arrangements if needed.",
  },
  {
    q: "What happens after the project launches?",
    a: "We monitor the system, help with any early issues, and provide clear documentation so your team understands it.",
  },
];



