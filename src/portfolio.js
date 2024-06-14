const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "#",
  title: "J.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Jhenbert",
  role: "Full Stack Web Developer",
  description:
    "Excited about delving into web development, I bring a robust skill set to the table. Committed to crafting exceptional solutions tailored to your requirements, I'm eager to collaborate and expand my knowledge along the way. Let's embark on this journey together and build something remarkable!",
  resume:
    "https://drive.google.com/file/d/17IYkYuIBhzj4e8kNHRMFMnWkZLRSBUDm/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/jhenbert",
    github: "https://github.com/jhenbertgit",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "CAL Token Faucet",
    description:
      "A web3-based platform enabling users to claim CAL Tokens, a cryptocurrency native to the Binance Smart Chain (BSC) Testnet Network.",
    stack: ["React", "Typescript", "EtherJS", "Shadcn-ui", "Tailwind CSS"],
    sourceCode: "https://github.com/jhenbertgit/cal-token-faucet.git",
    livePreview: "https://cal-token-faucet.vercel.app",
  },
  {
    name: "Blucare e-Clinic",
    description:
      "An API driven websites, this is our mini project 2 during our bootcamp.",
    stack: ["HTML", "Javascript", "CSS Vanilla", "Bootstrap"],
    sourceCode: "https://github.com/jhenbertgit/mini-project-2",
    livePreview: "https://blucare.netlify.app",
  },
  {
    name: "Sales Management",
    description:
      "Our mini project 3 during the bootcamp that demonstrate CRUD operation and have custom API.",
    stack: ["React", "Material-UI", "NodeJS", "ExpressJS", "MySQL"],
    sourceCode: "https://github.com/jhenbertgit/mini-project-3",
    livePreview: "http://wd41p-sales-mgt.vercel.app",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "TypeScript",
  "JavaScript",
  "Svelte (Sveltekit)",
  "Prisma ORM",
  "Tailwind CSS",
  "Linux (Ubuntu)",
  "Git",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hello@jhenbert.com",
};

export { header, about, projects, skills, contact };
