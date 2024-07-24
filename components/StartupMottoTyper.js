import React, { useEffect, useRef, useState } from 'react';
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
  },
  {
    problem: 'social isolation',
    impact: 'foster community connections',
    solution: 'social networking platforms'
  },
  {
    problem: 'disaster response',
    impact: 'enhance emergency preparedness',
    solution: 'disaster prediction algorithms'
  },
];

const command_option_strings = ['node give_me_an_idea.js', 'python3 makeAProject.py', 'ruby generate_project.rb', 'java IdeaGenerator.java', 'perl idea_generator.pl', 'bash idea_generator.sh'];


const generateRandomString = () => {
  const randomIndex = Math.floor(Math.random() * solutionsData.length);
  const { problem, impact, solution } = solutionsData[randomIndex];
  return `Our solution aims to tackle <strong class="text-accent">${problem}</strong> in order to <strong class="text-accent">${impact}</strong> through our <strong class="text-accent">${solution}</strong>.`;
};

const getRandomCommand = () => {
  const randomIndex = Math.floor(Math.random() * command_option_strings.length);
  return command_option_strings[randomIndex];
};

const StartupMottoTyper = () => {
  const commandTypedRef = useRef(null);
  const outputTypedRef = useRef(null);
  const [isTypingOutput, setIsTypingOutput] = useState(false);

  const startNewTypingCycle = () => {
    setIsTypingOutput(false);
    if (commandTypedRef.current) {
      commandTypedRef.current.destroy();
    }

    const commandOptions = {
      strings: [getRandomCommand()],
      typeSpeed: 50,
      startDelay: 200,
      showCursor: true,
      cursorChar: '█',
      onComplete: () => {
        setIsTypingOutput(true);
      }
    };

    commandTypedRef.current = new Typed('#command-typed-text', commandOptions);
  };

  useEffect(() => {
    startNewTypingCycle();

    return () => {
      if (commandTypedRef.current) {
        commandTypedRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (isTypingOutput) {
      const outputOptions = {
        strings: [generateRandomString()],
        typeSpeed: 5,
        startDelay: 200,
        showCursor: false,
        cursorChar: '█',
        onComplete: (self) => {
          setTimeout(() => {
            self.destroy();
            startNewTypingCycle();
          }, 3000);
        }
      };

      outputTypedRef.current = new Typed('#output-typed-text', outputOptions);
    }

    return () => {
      if (outputTypedRef.current) {
        outputTypedRef.current.destroy();
      }
    };
  }, [isTypingOutput]);

  return (
    <div className="font-mono text-sm sm:text-base md:text-lg lg:text-xl text-left text-green-300 border border-green-700 rounded-lg shadow-lg shadow-slate-800 p-2 sm:p-4 bg-black overflow-hidden max-w-full min-h-[20vh]">
      <div className="flex items-center mb-2 text-xs sm:text-sm">
        <div className="flex space-x-1 mr-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>

      </div>
      <div className="mb-2 break-words">
        <span className="text-gray-400">admin@hackbia:~$ </span>
        <span id="command-typed-text" className="text-white"></span>
      </div>
      <div id="output-typed-text" className="break-words"></div>
    </div>
  );
};

export default StartupMottoTyper;