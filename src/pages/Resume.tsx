import React from "react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const resumeLink =
    "https://drive.google.com/file/d/1rcPpd5XIHmU3bIlC4jyDfrj7o7a76c5Y/view?usp=drivesdk";

  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-8">
              <SectionHeading
                title="My Resume"
                subtitle="A summary of my experience, skills, and education"
                align="left"
                className="mb-0"
              />

              <Button asChild className="flex items-center gap-2">
                <a href={resumeLink} target="_blank" rel="noopener noreferrer">
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
              </Button>
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Animesh Shaw</h1>
                  <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
                    <p className="text-sm">animeshshaw69@gmail.com</p>
                    <a
                      href="https://linkedin.com/in/animesh1704"
                      className="text-sm text-portfolio-primary"
                    >
                      linkedin.com/in/animesh1704
                    </a>
                    <a
                      href="https://github.com/animeshog"
                      className="text-sm text-portfolio-primary"
                    >
                      github.com/animeshog
                    </a>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Professional Summary
                  </h2>
                  <p className="text-muted-foreground">
                    Full-stack developer proficient in React, Node.js,
                    TypeScript, and MongoDB with hands-on experience building
                    scalable web applications. Skilled in designing REST APIs,
                    integrating backend services, and deploying CI/CD pipelines
                    in Agile environments. Strong foundation in JavaScript
                    ecosystems, with practical knowledge of Postman, Express.js,
                    and cloud platforms. Eager to contribute to innovative
                    projects and deliver impactful solutions.
                  </p>
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Education</h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">
                          Bachelor of Computer Applications (BCA) — St. Joseph's
                          University, Bangalore
                        </h3>
                        <span className="text-sm text-muted-foreground">
                          Expected 2025
                        </span>
                      </div>
                      <p className="text-muted-foreground">SGPA: 8.26</p>
                    </div>
                    <p className="text-muted-foreground">
                      Higher Secondary (12th Grade) — 83%
                    </p>
                    <p className="text-muted-foreground">
                      Secondary School (10th Grade) — 71%
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Technical Skills
                  </h2>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Languages:</span>{" "}
                      JavaScript (ES6+), TypeScript, Python, Java, C, C#
                    </p>
                    <p>
                      <span className="font-semibold">Frontend:</span> React,
                      TailwindCSS, Vite, React Router, HTML5, CSS3
                    </p>
                    <p>
                      <span className="font-semibold">Backend:</span> Node.js,
                      Express.js, REST API development, WebSocket, JWT
                    </p>
                    <p>
                      <span className="font-semibold">Databases:</span> MongoDB,
                      MySQL
                    </p>
                    <p>
                      <span className="font-semibold">Tools & Platforms:</span>{" "}
                      Git, GitHub, AWS, Postman, TurboRepo, CI/CD basics
                    </p>
                    <p>
                      <span className="font-semibold">Methodologies:</span>{" "}
                      Agile, Scrum
                    </p>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Hackathon / Academic Projects
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold">
                        Nirvana (Goa Hackathon, Aug 2023)
                      </h3>
                      <p className="text-muted-foreground">
                        Developed an AI-powered wellness web application focused
                        on personalized health insights. Implemented frontend
                        components using React and integrated AWS services with
                        a Python backend. Collaborated in a team of 4 and
                        delivered a functional MVP within 48 hours.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        QuickMed (Academic Project, Jan 2024 – Apr 2024)
                      </h3>
                      <p className="text-muted-foreground">
                        Designed and built a full-stack healthcare app
                        leveraging Gemini API to provide AI-driven medical
                        insights. Engineered the frontend using React and
                        TypeScript, with backend APIs in Node.js and Express.
                        Implemented secure user authentication and optimized
                        performance for 1000+ simulated users.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Cut the Queue (Personal Project, Jul 2023)
                      </h3>
                      <p className="text-muted-foreground">
                        Created a real-time queue management app to reduce wait
                        times at food outlets. Developed backend services using
                        Node.js, WebSocket, and JWT for secure communications.
                        Integrated TurboRepo for monorepo management, improving
                        development efficiency.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Certifications</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>AWS Academy Graduate 2024</li>
                    <li>Infosys AI and Big Data Program 2023</li>
                    <li>Coursera – Big Data Specialization 2023</li>
                  </ul>
                </div>

                <Separator className="my-8" />

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    <li>
                      Winner — 1st Prize in Inter-college Treasure Hunt, Reel
                      Making, and Idea Pitch events.
                    </li>
                    <li>
                      Runner-up — 2nd Prize in Code Gambit and IT Quiz
                      competitions.
                    </li>
                    <li>
                      Participated in 3 hackathons, gaining practical experience
                      in collaborative software development.
                    </li>
                  </ul>
                </div>

                <Separator className="my-8" />

                <div>
                  <h2 className="text-xl font-semibold mb-4">Hobbies</h2>
                  <p className="text-muted-foreground">
                    Photography, Cooking, Sketching, Creative Writing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
