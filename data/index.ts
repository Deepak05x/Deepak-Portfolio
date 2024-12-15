import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I design with purpose, code with precision, and collaborate openly ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I thrive on technology, collaboration, and exceptional development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an AI powered Resume Builder Saas App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StoreDrive",
    des: "Effortless file management and sharing with StoreDrive, built on Next.js 15 and Appwrite Node SDK.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/app.svg"],
    link: "https://store-drive.vercel.app/sign-up",
  },
  {
    id: 2,
    title: "WhatsTheWord?",
    des: "A dynamic social media platform built with the MERN stack, delivering a seamless and engaging user experience.",
    img: "/p2.svg",
    iconLists: [
      "/mongo.svg",
      "/ex.svg",
      "/re.svg",
      "/node.svg",
      "/tail.svg",
      "/cloud.svg",
    ],
    link: "https://whatstheword.onrender.com/",
  },
  {
    id: 3,
    title: "Convo-Connect!",
    des: "Convo-Connect: A web-based platform for seamless messaging and photo sharing, featuring user search, chat prioritization, and real-time updates.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/fire.svg", "/js.svg", "/sass.svg"],
    link: "https://convo-connect.netlify.app/login",
  },
  {
    id: 4,
    title: "ChattersArchive",
    des: "A web-based platform enabling user communication with Google Authentication, chat management, and sharing capabilities.",
    img: "/p4.svg",
    iconLists: ["/js.svg", "/re.svg", "/chak.svg", "/fire.svg"],
    link: "https://chattersarchive.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Shashwat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shashwat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shashwat is the ideal partner.",
    name: "Vipul Jain",
    title: "Data Visualisation Engineer @ Srijan - A Material+ Company",
  },
  {
    quote:
      "Collaborating with Shashwat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shashwat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shashwat is the ideal partner.",
    name: "Vipul Jain",
    title: "Data Visualisation Engineer @ Srijan - A Material+ Company",
  },
  {
    quote:
      "Collaborating with Shashwat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shashwat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shashwat is the ideal partner.",
    name: "Vipul Jain",
    title: "Data Visualisation Engineer @ Srijan - A Material+ Company",
  },
  {
    quote:
      "Collaborating with Shashwat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shashwat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shashwat is the ideal partner.",
    name: "Vipul Jain",
    title: "Data Visualisation Engineer @ Srijan - A Material+ Company",
  },
  {
    quote:
      "Collaborating with Shashwat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Shashwat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shashwat is the ideal partner.",
    name: "Vipul Jain",
    title: "Data Visualisation Engineer @ Srijan - A Material+ Company",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Contributed to the development and launch of websites using HTML, CSS, and JavaScript, optimizing for performance, cross-platform compatibility, and responsiveness. Collaborated with developers and designers to integrate front-end and back-end systems.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/shhashwat",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/shhhashwat",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shhashwat/",
  },
];
