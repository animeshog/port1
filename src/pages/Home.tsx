import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
