import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { FC } from "react";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedText: FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  className = "",
}) => {
  const words = text.split(" ");

  return (
    <span className="inline-block">
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

const HeroSection: FC = () => {
  return (
    <div className="pt-8 pb-8 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        {/* Mobile Content */}
        <div className="md:hidden space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium bg-portfolio-accent/20 text-portfolio-primary rounded-full hover:bg-portfolio-accent/30 transition-colors"
          >
            Computer Applications Professional
          </motion.div>

          <motion.h1 className="text-4xl font-bold leading-tight">
            <AnimatedText text="Hi, I'm" delay={0.2} className="inline-block" />
            <span className="text-portfolio-primary bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              {" "}
              Animesh
            </span>
            <br />
            <AnimatedText
              text="I build innovative web applications"
              delay={0.4}
              className="inline-block"
            />
          </motion.h1>

          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="relative w-52 h-52">
              <motion.div
                animate={{
                  rotate: [-6, -4, -6],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/30 to-portfolio-accent/30 rounded-lg -rotate-6"
              />
              <img
                src="/lovable-uploads/a20a44c6-ba63-44cf-8361-5c8b8d24c99d.png"
                alt="Animesh"
                className="w-full h-full rounded-lg object-cover relative z-10 shadow-xl"
                onError={(e) => {
                  console.error("Image failed to load:", e);
                  const img = e.target as HTMLImageElement;
                  img.src = "/placeholder.svg";
                  img.onerror = null;
                }}
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg shadow-lg z-20 scale-75 md:scale-100 md:-bottom-4 md:-right-4 md:p-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-base md:text-xl">
                    BCA
                  </span>
                  <p className="text-xs md:text-sm">Computer Applications</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Add description after photo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-sm text-center px-4"
          >
            Aspiring Computer Applications professional with expertise in
            programming, web development, and AI-driven solutions. Passionate
            about leveraging technical skills to build innovative projects and
            contribute to impactful technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center gap-4"
          >
            <Button asChild size="sm" className="w-28">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="w-28">
              <Link to="/resume">Learn more</Link>
            </Button>
          </motion.div>
        </div>

        {/* Desktop Content */}
        <div className="hidden md:block space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-sm font-medium bg-portfolio-accent/20 text-portfolio-primary rounded-full hover:bg-portfolio-accent/30 transition-colors"
          >
            Computer Applications Professional
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <AnimatedText text="Hi, I'm" delay={0.2} className="inline-block" />
            <span className="text-portfolio-primary bg-clip-text text-transparent bg-gradient-to-r from-portfolio-primary to-portfolio-secondary">
              Animesh
            </span>
            <br />
            <AnimatedText
              text="I build innovative web applications"
              delay={0.4}
              className="inline-block"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-muted-foreground text-lg max-w-md"
          >
            Aspiring Computer Applications professional with expertise in
            programming, web development, and AI-driven solutions. Passionate
            about leveraging technical skills to build innovative projects and
            contribute to impactful technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-portfolio-primary to-portfolio-secondary hover:opacity-90 transition-opacity"
              >
                <Link to="/contact">Get in touch</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link to="/resume">Learn more</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative hidden md:flex md:justify-center"
        >
          <div className="relative w-[28rem] h-[28rem]">
            <motion.div
              animate={{
                rotate: [-6, -4, -6],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/30 to-portfolio-accent/30 rounded-lg -rotate-6"
            />
            <img
              src="/lovable-uploads/a20a44c6-ba63-44cf-8361-5c8b8d24c99d.png"
              alt="Animesh"
              className="w-full h-full rounded-lg object-cover relative z-10 shadow-xl"
              onError={(e) => {
                console.error("Image failed to load:", e);
                const img = e.target as HTMLImageElement;
                img.src = "/placeholder.svg";
                img.onerror = null;
              }}
            />
            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-lg shadow-lg z-20 scale-75 md:scale-100 md:-bottom-4 md:-right-4 md:p-4">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-portfolio-primary to-portfolio-secondary text-base md:text-xl">
                  BCA
                </span>
                <p className="text-xs md:text-sm">Computer Applications</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
