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
    "Building stunning webapps that can help your company grow and reach millions of audience.",
  resume: "http://resume.sample.com/",
  social: {
    facebook: "https://facebook.com/jhenbertvil",
    github: "https://github.com/jhenbertgit",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description: "Mini Project 1 from the bootcamp",
    stack: ["HTML", "Javascript", "CSS Vanilla", "Bootstrap"],
    sourceCode: "https://github.com/jhenbertgit/mini-project-1",
    livePreview: "https://jhenbertgit.github.io/mini-project-1",
  },
  {
    name: "Blucare e-Clinic",
    description: "Mini Project 2 from the bootcamp",
    stack: ["HTML", "Javascript", "CSS Vanilla", "Bootstrap"],
    sourceCode: "https://github.com/jhenbertgit/mini-project-2",
    livePreview: "https://blucare.netlify.app",
  },
  {
    name: "Sales Management",
    description: "Mini Project 3 from the bootcamp",
    stack: ["React", "Material-UI", "NodeJS", "ExpressJS", "MySQL"],
    sourceCode: "https://github.com/jhenbertgit/mini-project-3",
    livePreview: "http://wd41p-sales-mgt.vercel.app",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Material UI",
  "ReactJS",
  "Laravel",
  "Springboot",
  "NodeJS",
  "ExpressJS",
  "PostreSQL",
  "MySQL",
  "MonggoDB",
  "PHP",
  "Java",
  "Python",
  "Lua",
  "Nginx",
  "Linux",
  "Git",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hello@jhenbert.com",
};

export { header, about, projects, skills, contact };
