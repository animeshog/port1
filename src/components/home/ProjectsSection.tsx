import React from "react";
import SectionHeading from "../ui/section-heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  demoAvailable: boolean;
  codeAvailable?: boolean;
}

const getTagColor = (tag: string) => {
  const colors = {
    React: "bg-[#61DAFB] text-black",
    "React Native": "bg-[#61DAFB] text-black",
    TypeScript: "bg-[#3178C6] text-white",
    "Node.js": "bg-[#339933] text-white",
    Express: "bg-[#000000] text-white",
    MongoDB: "bg-[#47A248] text-white",
    OpenAI: "bg-[#412991] text-white",
    Python: "bg-[#3776AB] text-white",
    TensorFlow: "bg-[#FF6F00] text-white",
    AWS: "bg-[#232F3E] text-white",
  };
  return colors[tag] || "bg-gray-500 text-white";
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "QuickMed",
      description:
        "An AI-powered virtual doctor platform that provides instant medical consultations, symptom analysis, and preliminary health assessments.",
      image: "/lovable-uploads/quickmed.png", // Updated image path
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI"],
      github: "https://github.com/animeshog/project_quickmed",
      demoAvailable: false,
      codeAvailable: true,
    },
    {
      id: 2,
      title: "Cut The Queue",
      description:
        "An innovative queue management solution that digitalizes waiting lines. Features real-time queue status updates, estimated wait times, and virtual ticket system.",
      image: "/lovable-uploads/ctq.jpg",
      tags: ["React Native", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/iamnithishraja/cut-the-queue",
      link: "https://linktr.ee/teamcuttheq",
      demoAvailable: true,
      codeAvailable: true,
    },
    {
      id: 3,
      title: "Nirvana",
      description:
        "An AI-driven wellness platform that provides personalized diet and meditation recommendations based on user health data.",
      image: "/lovable-uploads/nirvana.jpg",
      tags: ["React", "Node.js", "Express", "Python", "TensorFlow"],
      github: "#",
      demoAvailable: false,
      codeAvailable: false,
    },
  ];

  return (
    <section className="section">
      <div className="container max-w-4xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of my recent work"
        />

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow p-4"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video overflow-hidden relative shadow-lg rounded-lg mt-4 ml-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex flex-col p-4 md:p-6">
                  <CardHeader className="p-0">
                    <CardTitle>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className={`px-3 py-1 text-sm transition-all hover:scale-105 ${getTagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 mt-4 flex-grow">
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-0 mt-4 flex flex-col sm:flex-row gap-4">
                    {project.title === "Nirvana" ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 min-w-[120px] text-sm sm:text-base cursor-not-allowed opacity-70"
                        disabled
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                          Private
                        </span>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1 min-w-[120px] text-sm sm:text-base"
                        disabled={!project.codeAvailable}
                      >
                        <a
                          href={project.codeAvailable ? project.github : "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            {project.codeAvailable ? "View Code" : "Private"}
                          </span>
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 min-w-[120px] text-sm sm:text-base"
                      variant={project.demoAvailable ? "default" : "secondary"}
                      disabled={!project.demoAvailable}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                          {project.demoAvailable ? "Live Demo" : "Coming Soon"}
                        </span>
                      </a>
                    </Button>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
