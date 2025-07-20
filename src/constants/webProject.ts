// constants/webProjects.ts
import Art from "../assets/art-gallery.png"
import MealPlanner from "../assets/ai-meal-planner-1.png"
import BlogCMS from "../assets/node-js-blog.png"
import Kaleido from "../assets/kaleidofinance.png"
import Belle from "../assets/belle.png"
import Manaement from "../assets/management.png"

export const webProjects = [
  {
    id: 1,
    title: "Web3 - Funding Platform",
    description: "DeFi Gateway to Abstract P2P lending & borrowing powered by Ai Agent",
    image: Kaleido,
    techStack: ["NextJs", "Dapps"],
    repo: "https://github.com/Codeprince001",
    demo: "https://kaleidofinance.xyz/",
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
    id: 3,
    title: "AI Meal Planner",
    description: "An AI meal planner that generates meal plan according to diet.",
    image: MealPlanner,
    techStack: ["Next.js", "Stripe", "Prisma", "OpenAI"],
    repo: "https://github.com/Codeprince001/ai-saas-mealplanner",
    demo: "https://ai-saas-mealplanner-livid.vercel.app/",
  },
  {
    id: 4,
    title: "Blogging CMS",
    description: "A Fullstack Blog Project",
    image: BlogCMS,
    techStack: ["NodeJS", "MongoDb", "AWS S3"],
    repo: "https://github.com/Codeprince001/MERN-BlogApp",
    demo: "https://techhome-blog-fdfd45864279.herokuapp.com/",
  },
  {
    id: 5,
    title: "Web3 Tokenomics LaunchPad",
    description: "Bele, the fearless symbol of Kaspa, decentralized finance with $BELE token",
    image: Belle,
    techStack: ["NextJs", "Kapsa", "DeFi"],
    repo: "https://github.com/Codeprince001",
    demo: "https://belethebull.xyz/",
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
];
