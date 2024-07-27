export const SKILLS = [
  {
    name: "Next.js",
    icon: "/nextjs.svg",
    bg: true,
  },
  {
    name: "React.js",
    icon: "/reactjs.svg",
    bg: false,
  },
  {
    name: "JavaScript",
    icon: "/js.svg",
    bg: false,
  },
  {
    name: "TypeScript",
    icon: "/ts.svg",
    bg: false,
  },
  {
    name: "Node.js",
    icon: "/nodejs.svg",
    bg: false,
  },
  {
    name: "Tailwind",
    icon: "/tailwind.svg",
    bg: false,
  },
  {
    name: "Git",
    icon: "/git.svg",
    bg: false,
  },
  {
    name: "GitHub",
    icon: "/github.svg",
    bg: true,
  },
  {
    name: "React Query",
    icon: "/reactquery.svg",
    bg: false,
  },
  {
    name: "MongoDB",
    icon: "/mongodb.svg",
    bg: false,
  },
  {
    name: "AWS",
    icon: "/aws.svg",
    bg: false,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: "/linkedinn.svg",
    link: "https://www.linkedin.com/in/abhishek-chorotiya-7a1a0a222/",
  },

  {
    name: "Github",
    icon: "/github.svg",
    link: "https://github.com/AbhishekChorotiya",
  },
  {
    name: "LeetCode",
    icon: "/leetcode.png",
    link: "https://leetcode.com/u/Abhishek_Chorotiya/",
  },
  {
    name: "Instagram",
    icon: "/instagram.svg",
    link: "https://www.instagram.com/abhishekchorotiya",
  },
] as const;

export const SLIDES = [
  {
    name: "CoDevTogether",
    images: ["/codev1.avif", "/codev2.avif", "/codev3.avif", "/codev4.avif"],
    description:
      "Create rooms to code, compile, chat, and track user activity in real-time. Perfect for seamless collaborative coding and discussions.",
    link: "https://codev.chorotiya.com/",
    github: "https://github.com/AbhishekChorotiya/coDevTogether",
    technologies: [
      "ReactJS",
      "Tailwind",
      "Socket.io",
      "NodeJS",
      "Express",
      "One Compiler",
    ],
  },
  {
    name: "AI Portfolio Website",
    images: ["/p1.avif", "/p2.avif", "/p3.avif", "/p4.avif"],
    description:
      "Showcasing my projects, skills, social media profiles, and experience with a portfolio website deployed on Vercel. Incorporated AI chat and text-to-speech capabilities using Vertex AI and Google Gemini.",
    link: "https://abhishek.chorotiya.com/",
    github: "https://github.com/AbhishekChorotiya/portfolioV2",
    technologies: [
      "NextJS",
      "Tailwind",
      "AOS",
      "Vercel",
      "Gemini",
      "Vertex AI",
    ],
  },
  {
    name: "Wifi Classromm Attendance System",
    images: ["/a1.avif", "/a2.avif", "/a3.avif", "/a4.avif", "/a5.avif"],
    description:
      "Facilitated faculty to take attendance of students using a mobile app, with admin functionality for course registration and student access to attendance records.",
    github: "https://github.com/AbhishekChorotiya/AttendanceApp",
    technologies: [
      "React Native",
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "JWT",
      "Multer",
      "xlsx",
    ],
  },
];
