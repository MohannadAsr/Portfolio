import React from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import MyProjects from "@/components/MyProjects";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <MyProjects />
      <ContactMe />
    </>
  );
}
