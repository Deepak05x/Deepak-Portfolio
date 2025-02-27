"use client";

import { navItems } from "@/data";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Hero = dynamic(() => import("@/components/Hero"));
const Grid = dynamic(() => import("@/components/Grid"));
const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
