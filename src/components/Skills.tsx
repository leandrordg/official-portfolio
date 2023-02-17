import Link from 'next/link';
import React from 'react';
import { IoChevronDown } from 'react-icons/io5';
import Skill from './Skill';
import { motion } from 'framer-motion';

type Props = {};

const Skills = ({}: Props) => {
  const skills = [
    {
      name: 'HTML',
      level: 90,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    },
    {
      name: 'CSS',
      level: 90,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    },
    {
      name: 'JavaScript',
      level: 80,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    },
    {
      name: 'Typescript',
      level: 70,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    },
    {
      name: 'React.js',
      level: 80,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      level: 80,
      image:
        'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Firebase',
      level: 70,
      image:
        'https://cdn.iconscout.com/icon/free/png-256/firebase-3628772-3030134.png',
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center p-6 relative">
      <div className="flex flex-col">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-gray-500 tracking-[15px] text-center mb-10 underline decoration-indigo-600">
          Habilidades
        </h2>

        <div className="absolute h-[800px] w-full left-0 top-10 bg-indigo-600/30 -skew-y-12 -z-20" />

        <motion.div
          initial={{
            opacity: 0,
            y: 400,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            return (
              <Skill
                key={index}
                name={skill.name}
                level={skill.level}
                image={skill.image}
              />
            );
          })}
        </motion.div>
      </div>

      <Link
        href="#projects"
        className="p-2 absolute bottom-5 flex flex-col justify-center items-center text-gray-500"
      >
        <IoChevronDown className="h-7 w-7" />
        <span className="uppercase text-xs">Arraste para baixo</span>
      </Link>
    </div>
  );
};

export default Skills;
