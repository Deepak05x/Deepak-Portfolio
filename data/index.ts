import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Resume", link: "#contact" }, // Resume
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
    title: "ViperBox",
    des: "A dynamic web application that let user's to customize their phone case",
    img: "/viperbox.png",
    iconLists: ["/next.svg", "/tail.svg", "/js.svg", "/mongo.svg"],
    link: "https://viper-box-deepak.vercel.app/",
  },
  {
    id: 2,
    title: "Rythmix",
    des: "A cutting-edge music streaming platform to enhance music experience",
    img: "/rythmix.png",
    iconLists: ["/re.svg", "/node.svg", "/tail.svg"],
    link: "https://rythmix-sage.vercel.app/",
  },
  {
    id: 3,
    title: "Promptify",
    des: "Promptify is  designed to let users create and share prompts with a community",
    img: "/promptify.png",
    iconLists: ["/next.svg", "/mongo.svg", "/js.svg", "/node.svg", "tail.svg"],
    link: "https://promptify-deepak.vercel.app/",
  },
  {
    id: 4,
    title: "Photographer's Website",
    des: "Discover a stunning photographer's portfolio fully responsive website ",
    img: "/photo.png",
    iconLists: ["/js.svg", "/re.svg", "/tail.svg"],
    link: "https://photographers-website.vercel.app/",
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
    title: "Frontend Developer Intern ",
    company: "@ ByteArchive",
    desc: "Worked on a team responsible for developing and designing a website for the client, merging the components togeather and making it fully responsive",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    duration: "Jul 2024 - Aug 2024 | Remote",
  },
  {
    id: 2,
    title: "Frontend Engineer Intern ",
    company: "@ DraconX",
    desc: "As a Frontend Engineer Intern, worked closely with a backend developer to deliver a client-centric website, taking full ownership of the frontend development process.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    duration: "Oct 2024 - Dec 2024 | Remote",
  },
  {
    id: 3,
    title: "Fullstack Developer Intern ",
    company: "@ Central Institute of Classical Tamil",
    desc: "Designing, developing, and maintaining full-stack web applications, ensuring seamless user experiences and efficient backend functionality",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    duration: "Dec 2024 - Present | On-Site",
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
