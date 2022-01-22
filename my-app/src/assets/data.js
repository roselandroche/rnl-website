import GameOfLife from "../images/GameOfLife.png";
import ProfHistory from "../images/ProfessionalHistory.png";
import SaveThisJob from "../images/SaveThisJob-MarketingPage.png";

// history
export const jobs = [
  {
    company: "24G",
    title: "Junior QA Developer",
    timeframe: "Jan 2022 - Current",
    desc: [],
    references: null,
  },
  {
    company: "Jambaree",
    title: "Web Developer",
    timeframe: "Apr 2021 - Nov 2021",
    desc: [
      "Brought wireframes to life using Gatsby, React, JavaScript, and Theme UI.",
      "Built responsive websites for multiple clients.",
      "Maintained an organized workflow using GitHub, GitLab, Asana, and Slack.",
    ],
    references: true,
  },
  {
    company: "GrantMe",
    title: "Junior Web Developer",
    timeframe: "Nov 2020 - Apr 2021",
    desc: [
      "Meticulously completed QA of new features for web application",
      "Efficiently maintained and updated WordPress site",
      "Independently managed and completed custom WordPress build within deadline",
      "Managed Hubspot CRM for multiple pipelines with custom logic",
    ],
    references: true,
  },
];

export const edu = [
  {
    institution: "Lambda School (now Bloom Institute of Technology)",
    credentialEarned: "Certificate: Full Stack Web Development",
    timeframe: "2019 - 2020",
  },
  {
    institution: "Kingswood University (formerly Bethany Bible College)",
    credentialEarned: "Bachelor's of Arts in Music Ministry",
    timeframe: "2010 - 2014",
  },
  {
    institution: "Hilbert College",
    credentialEarned: "Associate of Arts in Criminal Justice",
    timeframe: "2008 - 2010",
  },
];

// projects
export const proj = [
  {
    title: "Professional History",
    role: "Full Stack Developer",
    stage: "In Progress",
    tech: [
      "Gatsby",
      "React",
      "JavaScript",
      "Typescript",
      "Cypress",
      "ThemeUI",
      "Netlify",
      "Git",
    ],
    desc: [
      "A safe, convenient, and central place for people to save data they need when searching for a job",
      "Creatively discovered user need, and designed custom user experience",
      "Skillfully built clean, reusable modular components",
    ],
    github: "https://github.com/roselandroche/professional",
    deploy: "https://professional-history.netlify.app/",
    image: ProfHistory,
  },
  {
    title: "Conway’s Game of Life",
    role: "Full Stack Developer",
    stage: "Complete - For Now",
    tech: ["React", "JavaScript", "CSS", "Netlify", "Git"],
    desc: [
      "A SPA visualizing John Conway's Game of Life, including configurations, generation counter, and explanation of basic rules",
      "Resourcefully utilized resources to research and plan a fully functional application",
      "Skillfully built the architecture and algorithms of the project",
    ],
    github: "https://github.com/roselandroche/game_of_life",
    deploy: "https://awesome-ramanujan-7d7ef5.netlify.app/",
    image: GameOfLife,
  },
  {
    title: "Save This Job",
    role: "Back End Engineer",
    stage: "Complete",
    tech: ["Node", "Express", "Knex", "Supertest", "SQLite", "Git", "Heroku"],
    desc: [
      "An application built to give users the ability to save job postings and related information as they search for their next career",
      "Collaboratively worked with a cross functional team to create a fully functional web application and Chrome Extension",
      "Coordinated with other team members to create a well tested and seeded back end with numerous endpoints",
    ],
    github: "https://github.com/roselandroche/job-book-be",
    deploy: "https://save-this-job.netlify.app/",
    image: SaveThisJob,
  },
];

// about
export const tech = [
  {
    name: "React, JS, Node",
    useCase: "Full Stack Engineering",
    relatedProjects: [
      {
        name: "Personal Portfolio",
        github: "https://github.com/roselandroche/rnl-website",
      },
      {
        name: "Professional History",
        github: "https://github.com/roselandroche/professional",
      },
      {
        name: "Conway’s Game of Life",
        github: "https://github.com/roselandroche/game_of_life",
      },
    ],
  },
  {
    name: "Jest, Supertest, Cypress",
    useCase: "Automated Testing",
    relatedProjects: [
      {
        name: "Daily Challenge",
        github: "https://github.com/roselandroche/daily-challenge",
      },
      {
        name: "Professional History",
        github: "https://github.com/roselandroche/professional",
      },
      {
        name: "Save This Job",
        github: "https://github.com/roselandroche/job-book-be",
      },
    ],
  },
];

export const hobbies = [
  {
    name: "Hiking",
    details:
      "I am currently based out of Vancouver, BC which is well known for its gorgeous landscapes. I try to get out exploring with friends pretty often.",
  },
  {
    name: "New exciting experiences",
    details:
      "I love to try new things! This can mean anything from foods to activities. Some notable experiences include skydiving above Niagara Falls, eating (and enjoying) escargots, and whale watching!",
  },
  {
    name: "Reading",
    details:
      "I've been an avid reader since I was very young. Currently my favorite books tend to lie in the fantasy genre although I do also appreciate the classics.",
  },
  {
    name: "Fiber art",
    details:
      "I decided when I was a very young that I wanted to learn to knit. This was probably inspired by a book (see previous hobby), and once I learned I never stopped. Now I knit, crochet, and aspire to try weaving soon!",
  },
];
