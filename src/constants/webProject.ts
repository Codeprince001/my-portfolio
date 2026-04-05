// constants/webProjects.ts
import Art from "../assets/art-gallery.png"
import MealPlanner from "../assets/ai-resume-analyser.png"
import Kaleido from "../assets/kaleido.png"
import Manaement from "../assets/management.png"
import Uni from "../assets/landing-page.png"
import pochehr from "../assets/pochehr.png"
import tekmedoc from "../assets/tekmedoc.png"
import eventx from "../assets/event-x-hero.png";

export const webProjects = [
  {
    id: 1,
    title: "TekMedoc - Telemedicine Platform",
    description: "A telemedicine platform connecting patients and doctors for remote healthcare consultations.",
    image: tekmedoc,
    techStack: ["NextJs", "NestJs", "Socket.io", "Postgres"],
    repo: " ",
    demo: "https://www.tekmedoc.com/"
  },
  {
    id: 4,
    title: "Pochehr - HR Management System",
    description: "A comprehensive HR management system for efficient employee data handling and streamlined HR processes.",
    image: pochehr,
    techStack: ["NestJs", "NextJS", "Postgres"],
    repo: "",
    demo: "https://www.pochehr.com/",
  },
  {
  id: 5,
  title: "EventX - Event Management Platform",
  description:
    "A full-featured event management platform for creating, organizing, and tracking events with a seamless attendee experience.",
  image: eventx,
  techStack: ["NextJS", "NestJs", "Postgres"],
  repo: "",
  demo: "https://www.bookevents.live/",
},
{
  id: 3,
  title: "AI Resume Analyser",
  description: "An AI-powered tool that analyzes resumes, provides insights, and suggests improvements to optimize job applications.",
  image: MealPlanner,
  techStack: ["Next.js", "AuthJs", "Prisma", "OpenAI"],
  repo: "https://github.com/Codeprince001/ai-resume-builder",
  demo: "https://ai-resume-builder-neon.vercel.app/ai-assistant",
},
{
    id: 10,
    title: "Web3 - Funding Platform",
    description: "DeFi Gateway to Abstract P2P lending & borrowing powered by Ai Agent",
    image: Kaleido,
    techStack: ["NextJs", "Dapps"],
    repo: "https://github.com/Codeprince001",
    demo: "https://kaleidofi.xyz/",
  },
  {
    id: 2,
    title: "Web3 Art App",
    description: "A dynamic web gallery showcasing modern art collections.",
    image: Art,
    techStack: ["React", "TailwindCSS", "Node.js"],
    repo: "https://github.com/username/art-gallery",
    demo: "https://art-website-mu.vercel.app/",
  },
  {
    id: 5,
    title: "TaskWise — Smarter Task & Team Management",
    description: "A task and team management dashboard, featuring visual analytics and real-time task tracking",
    image: Manaement,
    techStack: ["ReactJs", "Express", "NodeJs"],
    repo: "https://github.com/Codeprince001/client-dashboard",
    demo: "https://client-dashboard-pearl.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Web3 Tokenomics LaunchPad",
  //   description: "Bele, the fearless symbol of Kaspa, decentralized finance with $BELE token",
  //   image: Belle,
  //   techStack: ["NextJs", "Kapsa", "DeFi"],
  //   repo: "https://github.com/Codeprince001",
  //   demo: "https://belethebull.xyz/",
  // },
  // {
  //   id: 6,
  //   title: "Blogging CMS",
  //   description: "A Fullstack Blog Project",
  //   image: BlogCMS,
  //   techStack: ["ReactJs", "NodeJS & Express", "MongoDb", "AWS S3"],
  //   repo: "https://github.com/Codeprince001/MERN-BlogApp",
  //   demo: "https://techhome-blog-fdfd45864279.herokuapp.com/",
  // },
  {
    id: 7,
    title: "University Website",
    description: "Landing page of a univerisity website",
    image: Uni,
    techStack: ["NextJs", "Typescript"],
    repo: "https://github.com/Codeprince001",
    demo: "https://university-website-black.vercel.app/",
  },
];
