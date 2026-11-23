import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  sheryians,
  threejs,
  ait,
  GSM,
  forest,
  netflix,
} from "../assets";

// Local assets (served from /public)
const trophy = "/icons/trophy.svg";
const python = "/tech/python.svg";
const pandas = "/tech/pandas.svg";
const sklearn = "/tech/sklearn.svg";
const langchain = "/tech/langchain.svg";
const qdrant = "/tech/qdrant.svg";
const powerbi = "/tech/powerbi.svg";
const sql = "/tech/sql.svg";
const streamlit = "/tech/streamlit.svg";

export const profile = {
  name: "Yuvraj Singh",
  email: "thakaryuvraj18@gmail.com",
  phone: "+91-6350073705",
  // TODO: replace with your exact LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/yuvraj-singh-7425aa288/",
  // TODO: add your GitHub profile URL (not on your resume)
  github: "",
  resume: "/Yuvraj_Singh_Resume.pdf",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Journey" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Machine Learning & Data Science", icon: mobile },
  { title: "AI & LLM Engineering (RAG)", icon: web },
  { title: "Data Analytics & BI", icon: creator },
  { title: "Full-Stack & Backend", icon: backend },
];

// The first MAX_BALLS entries render as 3D balls (browsers allow only ~16 WebGL
// canvases per page); everything else appears on the /all-technologies page.
const technologies = [
  { name: "Python", icon: python },
  { name: "Scikit-learn", icon: sklearn },
  { name: "Pandas", icon: pandas },
  { name: "LangChain", icon: langchain },
  { name: "Qdrant", icon: qdrant },
  { name: "Power BI", icon: powerbi },
  { name: "SQL", icon: sql },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Streamlit", icon: streamlit },
  { name: "JavaScript", icon: javascript },
  { name: "git", icon: git },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
];

const experiences = [
  {
    title: "B.E. Electronics & Telecommunication",
    company_name: "Army Institute of Technology, Pune",
    icon: ait,
    iconBg: "#0188E3",
    date: "2023 – Present",
    points: [
      "CGPA: 9.12/10.",
      "Army Welfare Education Society (AWES) Scholarship recipient.",
      "Solved 100+ DSA problems on LeetCode and earned a 5⭐ rating on HackerRank in C++, Python and C.",
      "Technical head of the CEAR club at AIT.",
      "Active in the college Basketball team and represented in Kabaddi tournaments.",
    ],
  },
  {
    title: "Hackathons & Achievements",
    company_name: "National competitions",
    icon: trophy,
    iconBg: "#1d1836",
    date: "2025",
    points: [
      "Selected in the BNP Paribas Hackathon among the Top 550 participants nationwide out of 65,000+ applicants.",
      "Finalist in Mastercard Code for Change Hackathon 2025, among the Top 200 teams from 1,500+ participants.",
      "Secured 1st Place in the NAND Gate Event at Tech Aakriti.",
    ],
  },
  {
    title: "Technical Skills & Learning",
    company_name: "Independent Projects",
    icon: sheryians,
    iconBg: "#ffff",
    date: "Aug 2023 - Present",
    points: [
      "Proficient in Python, C++, Java, JavaScript, SQL, React, Node.js, MongoDB, Docker, Git & GitHub.",
      "Built RAG and ML projects: IMPART (regulatory impact assessment) and TrustGuard (insurance mis-selling risk prediction).",
      "Developed Health Care Interface (Node.js, MongoDB) for MI Room management.",
      "Created an IoT-based Humidity & Temperature Monitoring system using Arduino.",
      "Designed and hosted a Portfolio Website with a contact form for recruiter communication.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "IMPART – Regulatory Impact Assessment Engine",
    description:
      "AI co-pilot that evaluates enterprise Change Requests across EMIR, UK EMIR, ASIC, RBI and HKMA, cutting assessment time from days to minutes. Multi-format ingestion (PDF + Excel) into a Qdrant vector DB, Chain-of-Thought reasoning with clause-level citations and zero-hallucination guardrails, audit-ready impact matrices (>60% alignment on ground-truth legal cases) and a Streamlit dashboard with a regional conflict heatmap.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "Qdrant", color: "pink-text-gradient" },
      { name: "Ollama", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
    ],
    image: "/projects/impart.svg",
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "TrustGuard – Insurance Mis-selling Risk Prediction",
    description:
      "End-to-end classifier on a 5,000-record synthetic dataset (11.5% class imbalance) with a leakage-safe Scikit-learn pipeline and 5 domain features. Compared four model families using 5-fold CV and grid search, choosing the final model against an 80% recall target. 0.83 ROC-AUC, catching 74% of risky interactions at 32% precision. Includes a prediction script with top risk drivers and a Power BI dashboard built with DAX.",
    tags: [
      { name: "Scikit-learn", color: "blue-text-gradient" },
      { name: "Pandas", color: "green-text-gradient" },
      { name: "PowerBI", color: "pink-text-gradient" },
      { name: "DAX", color: "blue-text-gradient" },
    ],
    image: "/projects/trustguard.svg",
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "Temperature Monitoring",
    description:
      "Built an IoT system using Arduino to measure and display humidity and temperature levels. A hardware project that checks temperature without touching the person, useful for contagious illnesses such as COVID-19.",
    tags: [
      { name: "arduino", color: "green-text-gradient" },
      { name: "Temperature", color: "blue-text-gradient" },
      { name: "IoT", color: "pink-text-gradient" },
    ],
    image: GSM,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "Health Care Interface",
    description:
      "Developed a Health Care backend interface for the college MI Room. Designed to assist the college's nursing assistant in managing daily medical room tasks.",
    tags: [
      { name: "Nodejs", color: "green-text-gradient" },
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "HTML_CSS", color: "pink-text-gradient" },
    ],
    image: forest,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "Implemented game logic including win-checking, draw detection and real-time turn switching, with clear visual feedback, winner announcement and restart functionality.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: netflix,
    source_code_link: "",
    live_website_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
