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
    "Passionate about web development, eager to learn, and looking for opportunities to grow. With a solid foundation in below listed tech stacks, I'm committed to delivering high-quality work that meets your needs. Let's create something great together!",
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
    stack: ["Typescript", "EtherJS", "Shadcn-ui", "Tailwind CSS"],
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
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "EtherJS",
  "PostreSQL",
  "MySQL",
  "Tailwind CSS",
  "Nginx",
  "Linux (Ubuntu)",
  "Git",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hello@jhenbert.com",
};

export { header, about, projects, skills, contact };
