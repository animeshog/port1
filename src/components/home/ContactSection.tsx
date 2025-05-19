import React from 'react';
import SectionHeading from '../ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section className="section bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/10 py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's discuss how I can help bring your ideas to life."
        />

        <Card className="max-w-3xl mx-auto border-none shadow-xl mt-8">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-12">
              <div className="md:flex-1 w-full">
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance work and internship
                  opportunities. Drop me a message and I'll get back to you as
                  soon as possible.
                </p>
                <Button asChild size="lg" className="w-full md:w-auto">
                  <Link to="/contact">Contact Me</Link>
                </Button>
              </div>
              <div className="md:flex-1 w-full md:w-auto">
                <div className="grid gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-portfolio-primary/10 flex items-center justify-center text-portfolio-primary shrink-0">
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-muted-foreground">Email</div>
                      <a
                        href="mailto:animeshshaw69@gmail.com"
                        className="font-medium break-all"
                      >
                        animeshshaw69@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-portfolio-primary/10 flex items-center justify-center text-portfolio-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Location
                      </div>
                      <span className="font-medium">
                        Bengaluru, Karnataka, 560030
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
