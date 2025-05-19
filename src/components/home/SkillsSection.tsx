import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaAws,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVite,
  SiCsharp,
  SiPython,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const getSkillColor = (skill: string) => {
  const colors = {
    HTML: "bg-[#E34F26] text-white",
    CSS: "bg-[#1572B6] text-white",
    JavaScript: "bg-[#F7DF1E] text-black",
    Python: "bg-[#3776AB] text-white",
    "C#": "bg-[#239120] text-white",
    C: "bg-[#A8B9CC] text-black",
    Java: "bg-[#007396] text-white",
    React: "bg-[#61DAFB] text-black",
    TailwindCSS: "bg-[#06B6D4] text-white",
    "React Router": "bg-[#CA4245] text-white",
    Vite: "bg-[#646CFF] text-white",
    "Node.js": "bg-[#339933] text-white",
    Express: "bg-[#000000] text-white",
    TypeScript: "bg-[#3178C6] text-white",
    WebSocket: "bg-[#4353A4] text-white",
    MySQL: "bg-[#4479A1] text-white",
    MongoDB: "bg-[#47A248] text-white",
    Git: "bg-[#F05032] text-white",
    GitHub: "bg-[#181717] text-white",
    AWS: "bg-[#232F3E] text-white",
    JWT: "bg-[#000000] text-white",
  };
  return colors[skill] || "bg-gray-500 text-white";
};

const SkillsSection = () => {
  const skills = [
    { name: "React", icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
    },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <SiJavascript className="w-6 h-6" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "C",
        "Java",
      ],
    },
    {
      title: "Frontend",
      icon: <FaReact className="w-6 h-6" />,
      skills: ["React", "TailwindCSS", "React Router", "Vite"],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="w-6 h-6" />,
      skills: ["Node.js", "Express", "WebSocket"],
    },
    {
      title: "Databases & Tools",
      icon: <SiMongodb className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "AWS", "JWT"],
    },
  ];

  return (
    <section className="py-16 bg-portfolio-light">
      <div className="container">
        <SectionHeading
          title="Skills"
          subtitle="Here are some of the technologies I work with"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-black">
                <div className="text-portfolio-primary mb-3">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="h-full hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-portfolio-primary/10 text-portfolio-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`px-3 py-1 text-sm transition-all hover:scale-105 ${getSkillColor(
                        skill
                      )}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
