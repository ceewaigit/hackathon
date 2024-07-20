'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BentoGrid from '../components/BentoGrid.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Prizes from '../components/Prizes.js';
import Sponsors from '../components/Sponsors.js';
import FAQ from '../components/FAQ.js';
import Judges from '../components/Judges.js';
import Menu from '../components/Menu.js';
import HackathonTimeline from '../components/HackathonTimeline.js';
import Participants from '../components/Participants.js';
import ProjectShowcasePage from '../components/ProjectShowcasePage.js';
import { ReactNode } from 'react';

const AnimatedSection = ({ children, animation }: { children: ReactNode, animation: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animations: { [key: string]: { initial: { [key: string]: number }, animate: { [key: string]: number }, transition: { duration: number } } } = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    },
    slideIn: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.8 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -10 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={animations[animation].initial}
      animate={inView ? animations[animation].animate : animations[animation].initial}
      transition={animations[animation].transition}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <AnimatedSection animation="fadeIn">
        <BentoGrid />
      </AnimatedSection>
      <AnimatedSection animation="slideUp">
        <Prizes />
      </AnimatedSection>
      <AnimatedSection animation="slideIn">
        <FAQ />
      </AnimatedSection>
      <AnimatedSection animation="scale">
        <HackathonTimeline />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <ProjectShowcasePage />
      </AnimatedSection>
      <AnimatedSection animation="slideUp">
        <Sponsors />
      </AnimatedSection>
      <AnimatedSection animation="fadeIn">
        <Judges />
      </AnimatedSection>
      <AnimatedSection animation="slideIn">
        <Participants />
      </AnimatedSection>
      <Footer />
    </div>
  );
}