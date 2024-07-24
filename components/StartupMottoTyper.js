import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const solutionsData = [
  {
    problem: 'climate change',
    impact: 'reduce carbon emissions',
    solution: 'AI-powered carbon capture technology'
  },
  {
    problem: 'healthcare inefficiencies',
    impact: 'improve patient outcomes',
    solution: 'blockchain-based health record systems'
  },
  {
    problem: 'educational disparities',
    impact: 'enhance learning opportunities',
    solution: 'VR-enhanced learning platforms'
  },
  {
    problem: 'food insecurity',
    impact: 'minimize food waste',
    solution: 'IoT-enabled smart agriculture systems'
  },
  {
    problem: 'mental health challenges',
    impact: 'support emotional well-being',
    solution: 'ML-driven mental health chatbots'
  },
  {
    problem: 'financial illiteracy',
    impact: 'empower financial decision-making',
    solution: 'decentralized finance (DeFi) applications'
  },
  {
    problem: 'data privacy concerns',
    impact: 'protect personal information',
    solution: 'quantum encryption protocols'
  },
  {
    problem: 'urban transportation issues',
    impact: 'decrease traffic congestion',
    solution: 'autonomous vehicle networks'
  },
  {
    problem: 'renewable energy adoption',
    impact: 'accelerate clean energy transition',
    solution: 'advanced energy storage solutions'
  },
  {
    problem: 'small business struggles',
    impact: 'boost local economies',
    solution: 'AI-driven business analytics tools'
  },
  {
    problem: 'water scarcity',
    impact: 'increase water availability',
    solution: 'desalination technology'
  },
  {
    problem: 'cybersecurity threats',
    impact: 'secure digital infrastructure',
    solution: 'AI-driven cybersecurity systems'
  },
  {
    problem: 'waste management',
    impact: 'promote recycling',
    solution: 'smart waste management systems'
  },
  {
    problem: 'energy consumption',
    impact: 'optimize energy use',
    solution: 'energy-efficient appliances'
  },
  {
    problem: 'air pollution',
    impact: 'improve air quality',
    solution: 'air purification systems'
  }
];

const generateRandomString = () => {
  const randomIndex = Math.floor(Math.random() * solutionsData.length);
  const { problem, impact, solution } = solutionsData[randomIndex];
  return `Our solution aims to tackle <strong class="text-accent">${problem}</strong> ^1000\nin order to <strong class="text-accent">${impact}</strong> ^1000\nthrough our innovative <strong class="text-accent">${solution}</strong>.^3000`;
};

const generateStrings = () => {
  return Array(10).fill(null).map(generateRandomString);
};

const StartupMottoTyper = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: generateStrings(),
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      shuffle: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  return (
    <div className="font-mono text-lg md:text-xl text-center text-primary border border-muted rounded-lg shadow-lg p-4">
      <span ref={el}></span>
    </div>
  );
};

export default StartupMottoTyper;
