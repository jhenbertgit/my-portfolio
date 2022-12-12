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
    description: "Sample project",
    stack: ["React", "Material-UI"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description: "Sample project",
    stack: ["React", "Material-UI"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description: "Sample project",
    stack: ["React", "Material-UI"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Material UI",
  "Git",
  "Node JS",
  "PHP",
  "Java",
  "Python",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "hello@mail.com",
};

export { header, about, projects, skills, contact };
