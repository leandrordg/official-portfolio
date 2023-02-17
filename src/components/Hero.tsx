import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { useTypewriter } from 'react-simple-typewriter';

type Props = {};

const Hero = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'Leandro Rodrigues',
      'Web-Designer.tsx',
      'Frontend Developer',
      '<Bora codar />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex items-center justify-center relative p-6 overflow-x-hidden">
      <div className="flex flex-col items-center relative w-full text-center">
        
        <div>
          <div className="border border-neutral-800 animate-pulse -z-10 rounded-full h-[300px] w-[300px] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2" />
          <div className="border border-indigo-600/10 animate-pulse -z-10 rounded-full h-[500px] w-[500px] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2" />
          <div className="border border-indigo-600/30 animate-pulse -z-10 rounded-full h-[700px] w-[700px] absolute left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2" />
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/81198533?v=4"
          alt="Perfil"
          className="h-40 w-40 rounded-full mb-8"
        />
        <span className="uppercase tracking-[15px] text-gray-500 sm:text-2xl">
          Computer Science
        </span>
        <span className="absolute -bottom-16 text-2xl sm:text-4xl font-bold tracking-widest">
          {text}
        </span>
      </div>

      <Link
        href="#about"
        className="p-2 absolute bottom-5 flex flex-col justify-center items-center text-gray-500"
      >
        <IoChevronDown className="h-7 w-7" />
        <span className="uppercase text-xs">Arraste para baixo</span>
      </Link>
    </div>
  );
};

export default Hero;
