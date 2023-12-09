//  icons
import {
  FiLinkedin,
  FiPhone,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/Project1.jpg";
import Project2 from "./assets/img/projects/Project2.jpg";
import Project3 from "./assets/img/projects/Project3.png";
import Project4 from "./assets/img/projects/Project4.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nodejs.png";
import SkillImg6 from "./assets/img/skills/java.png";
import SkillImg7 from "./assets/img/skills/python.jpeg";
import SkillImg8 from "./assets/img/skills/sql.jpeg";

// testimonial images

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "education",
    href: "education",
  },
  {
    name: "skills",
    href: "skills",
  },
  {
    name: "project",
    href: "portfolio",
  },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: "mailto:a.puneeth.1501@gmail.com",
    target: "_blank",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/puneeth1501",
    target: "_blank",
  },
  {
    icon: <FiMapPin />,
    href: "https://www.google.com/maps/place/St.+Louis,+MO/@38.6531004,-90.243462,11z/data=!3m1!4b1!4m6!3m5!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!8m2!3d38.6270025!4d-90.1994042!16zL20vMDZ3eHc?entry=ttu",
    target: "_blank",
  },
];

// companies

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Amazon clone",
    category: "Self initiative project",
    info: "This is a ecommerce project and it is helpful to buy items needed for daily usage .",
    github: "https://github.com/puneeth1501/mern-amazona-master",
    tech: "javaScript | react | Mongo db | Express js | Node Js ",
  },
  {
    id: "2",
    image: Project2,
    name: "Hotel management",
    category: "Self initiative project",
    info: "This is Hotel management project ,which is built to help customers to book slots for reserving a place in hotel ",
    github:
      "https://github.com/puneeth1501/Hotel-Management-Project-Java-master",
    tech: "Java | Automation Java awt ",
  },
  {
    id: "3",
    image: Project3,
    name: "Iot project ",
    category: "Team project",
    info: " This project is built for Color Identification in Images Done Using Google Colab",
    github:
      "https://github.com/Bhuvanesh-pixel/Computer-vision-and-IoT-Task2-GRIP",
    tech: "Python",
  },
  {
    id: "4",
    image: Project4,
    name: "Portfolio",
    category: "Self initiative",
    info: "This is portfolio website ,which actually show case project and education qualification of mine",
    github: "https://github.com/puneeth1501/puneeth1501.io",
    tech: "HTML | CSS | javascript",
  },
];

export const education = [
  {
    id: 1,
    degree: "Your Degree",
    university: "University Name",
    duration: "Year - Year",
  },
  // Add more education entries as needed
];

// skill
export const skills = [
  { name: "HTML 5", image: SkillImg1, percent: 90 },
  { name: "CSS 3", image: SkillImg2, percent: 70 },
  { name: "Javasript", image: SkillImg3, percent: 80 },
  { name: "React", image: SkillImg4, percent: 75 },
  { name: "NodeJS", image: SkillImg5, percent: 70 },
  { name: "Java", image: SkillImg6, percent: 80 },
  { name: "Python", image: SkillImg7, percent: 60 },
  { name: "Mongo db", image: SkillImg8, percent: 65 },
  // ... other skills
];

// services

// testimonials

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "Feel free to connect",
    description: "a.puneeth.1501@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "St. Louis, Missouri",
    // description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: "Mobile Number",
    subtitle: "+1 636 529 6770",
  },
];
