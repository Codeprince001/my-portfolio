// constants/webProjects.ts
import Art from "../assets/art-gallery.png"
import MealPlanner from "../assets/ai-meal-planner-1.png"
import Kaleido from "../assets/kaleidofinance.png"
import Belle from "../assets/belle.png"

export const webProjects = [
  {
    id: 1,
    title: "Web3 Art App",
    description: "A dynamic web gallery showcasing modern art collections.",
    image: Art,
    techStack: ["React", "TailwindCSS", "Node.js"],
    repo: "https://github.com/username/art-gallery",
    demo: "https://art-website-mu.vercel.app/",
  },
  {
    id: 2,
    title: "AI Portfolio Generator",
    description: "An AI meal planner that generates meal plan according to diet.",
    image: MealPlanner,
    techStack: ["Next.js",, "Stripe", "Prisma", "OpenAI"],
    repo: "https://github.com/Codeprince001/ai-saas-mealplanner",
    demo: "https://ai-saas-mealplanner-livid.vercel.app/",
  },
  {
    id: 3,
    title: "DevOps Dashboard",
    description: "Interactive dashboard to visualize CI/CD pipelines.",
    image: "/images/devops-dashboard.png",
    techStack: ["Vue", "Docker", "Firebase"],
    repo: "https://github.com/username/devops-dashboard",
    demo: "https://devopsdashboard.example.com",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "Fullstack e-commerce store with cart and admin features.",
    image: "/images/ecommerce.png",
    techStack: ["React", "MongoDB", "Express"],
    repo: "https://github.com/username/ecommerce-platform",
    demo: "https://store.example.com",
  },
  {
    id: 5,
    title: "Blogging CMS",
    description: "Headless CMS platform for managing and publishing blogs.",
    image: "/images/blog-cms.png",
    techStack: ["Next.js", "Sanity", "Typescript"],
    repo: "https://github.com/username/blog-cms",
    demo: "https://cms.example.com",
  },
];
