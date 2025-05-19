import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const AnimatedText = ({ text, delay = 0 }) => {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 12,
            stiffness: 200,
            delay: delay + index * 0.1,
          }}
          className="inline-block whitespace-pre"
        >
          {word + " "}
        </motion.span>
      ))}
    </span>
  );
};

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Database Management", level: 70 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React, TypeScript, and Tailwind CSS. Implemented new features and optimized application performance.",
    },
    {
      title: "Web Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description:
        "Developed and maintained client websites, implemented responsive designs, and optimized website performance. Collaborated with designers to implement UI/UX improvements.",
    },
    {
      title: "Junior Developer",
      company: "Web Experts",
      period: "2017 - 2019",
      description:
        "Assisted in the development of websites and web applications. Gained experience in HTML, CSS, JavaScript, and various web development frameworks.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2013 - 2017",
      description:
        "Focused on web development, algorithms, and software engineering. Participated in various hackathons and coding competitions.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Code Academy",
      period: "2017",
      description:
        "Intensive 12-week program covering modern web development technologies including React, Node.js, and MongoDB.",
    },
  ];

  return (
    <Layout>
      <section className="pt-16 pb-8">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              title={<AnimatedText text="About Me" delay={0.2} />}
              subtitle={
                <AnimatedText
                  text="Get to know more about me and my background"
                  delay={0.4}
                />
              }
              align="left"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 3 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute inset-0 bg-portfolio-accent rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=700"
                  alt="Developer"
                  className="relative z-10 rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold">Who am I?</h2>
              <AnimatedText
                text="I'm a passionate full-stack developer with over 5 years of experience in building web applications. I specialize in creating responsive, user-friendly interfaces using modern technologies."
                delay={0.6}
              />
              <AnimatedText
                text="Throughout my career, I've worked with a variety of clients from startups to established businesses, helping them build digital products that solve real problems. I'm constantly learning and experimenting with new technologies to stay ahead in the ever-evolving tech landscape."
                delay={0.8}
              />
              <AnimatedText
                text="When I'm not coding, you can find me hiking, reading tech blogs, or attending local tech meetups. I'm also passionate about mentoring junior developers and contributing to open-source projects."
                delay={1}
              />

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="font-semibold">Name:</h3>
                  <p>Your Name</p>
                </div>
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>your.email@example.com</p>
                </div>
                <div>
                  <h3 className="font-semibold">Location:</h3>
                  <p>San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-semibold">Availability:</h3>
                  <p>Full-time / Freelance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">My Skills</h2>
            <p className="text-muted-foreground">
              Technical skills and technologies I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-portfolio-light">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Experience & Education</h2>
            <p className="text-muted-foreground">
              My professional journey and academic background
            </p>
          </div>

          <Tabs defaultValue="experience">
            <TabsList className="mb-8">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>

            <TabsContent value="experience">
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {exp.title}
                            </h3>
                            <p className="text-portfolio-primary">
                              {exp.company}
                            </p>
                          </div>
                          <span className="text-sm bg-portfolio-accent/20 text-portfolio-secondary px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {exp.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {edu.degree}
                            </h3>
                            <p className="text-portfolio-primary">
                              {edu.institution}
                            </p>
                          </div>
                          <span className="text-sm bg-portfolio-accent/20 text-portfolio-secondary px-3 py-1 rounded-full">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default About;
