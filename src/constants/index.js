import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  ait,
  GSM,
  forest,
  netflix,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "C++, C, Python (DSA)",
    icon: mobile,
  },
  {
    title: "Problem Solving",
    icon: backend,
  },
  {
    title: "DBMS, CN, OS",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Student Developer",
    company_name: "Army Institute of Technology, Pune",
    icon: ait, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Aug 2023 – Present",
    points: [
      "Pursuing B.E. in Electronics & Telecommunication with 9.14 CGPA.",
      "Solved 100+ DSA problems on LeetCode, building strong problem-solving skills.",
      "Achieved 5⭐ rating on HackerRank in C++, Python, and C.",
      "Ranked 3rd in NAND Gate event at Tech Aakriti.",
      "Technical head of CEAR club at AIT.",
      "Active player in college Basketball team and represented in Kabaddi tournaments.",
    ],
  },
  {
    title: "Technical Skills & Learning",
    company_name: "Independent Projects",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Aug 2023 - Present",
    points: [
      "Proficient in C++, Python, HTML, CSS, JavaScript, React, Node.js, MongoDB, Git & GitHub.",
      "Developed Health Care Interface (Node.js, MongoDB) for MI Room management.",
      "Built Tic Tac Toe Game using HTML, CSS, and JavaScript with win-checking and restart functionality.",
      "Created IoT-based Humidity & Temperature Monitoring system using Arduino.",
      "Designed and hosted a Portfolio Website with EmailJS integration for recruiter communication.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Temperature Monitoring",
    description:
      "• Built an IoT system using Arduino to measure and display humidity and temperature levels. It is my hardware project that can check temperature without touching a covid -19 affected person or any other disease that can spread when we touch him or in his contact.",
    tags: [
      { name: "arduino", color: "green-text-gradient" },
      { name: "Temperature", color: "blue-text-gradient" },
      { name: "Humanity", color: "pink-text-gradient" },
    ],
    image: GSM,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "Helath Care InterFace",
    description:
      "Developed a Health Care backend iterface for the college MI Room. Designed and developed to assist the college’s nursing assistant in managing daily medical room tasks",
    tags: [
      { name: "Nodejs", color: "green-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "HTML #CSS", color: "pink-text-gradient" },
    ],
    image: forest,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      " Implemented game logic including win-checking algorithms, draw detection, and real-time turn switching.Enhanced user experience with clear visual feedback for moves, winner announcement, and restart functionality.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: netflix,
    // github link ⬇️
    source_code_link: "",
    // project link ⬇️
    live_website_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
