import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import Project from './Project';

type Props = {};

const Projects = ({}: Props) => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dolor rem accusantium dolore quos voluptate dignissimos hic. Iste pariatur voluptate laborum facere est, quae exercitationem voluptatum sapiente? Laudantium, debitis nemo?',
      url: 'https://www.google.com',
      image:
        'https://uploaddeimagens.com.br/images/004/356/734/full/Captura_de_tela_2023-02-16_081332.jpg?1676599504',
    },
    {
      title: 'Project 2',
      description: 'Project 2 description',
      url: 'https://www.google.com',
      image:
        'https://uploaddeimagens.com.br/images/004/356/734/full/Captura_de_tela_2023-02-16_081332.jpg?1676599504',
    },
    {
      title: 'Project 3',
      description: 'Project 3 description',
      url: 'https://www.google.com',
      image:
        'https://uploaddeimagens.com.br/images/004/356/734/full/Captura_de_tela_2023-02-16_081332.jpg?1676599504',
    },
    {
      title: 'Project 4',
      description: 'Project 4 description',
      url: 'https://www.google.com',
      image:
        'https://uploaddeimagens.com.br/images/004/356/734/full/Captura_de_tela_2023-02-16_081332.jpg?1676599504',
    },
  ];

  return (
    <div className="h-screen flex items-center justify-center p-6 relative">
      <div className="flex flex-col w-full">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-gray-500 tracking-[15px] text-center underline decoration-indigo-600">
          Projetos
        </h2>

        <div className="flex overflow-x-scroll snap-x snap-mandatory gap-6 py-10 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-neutral-800">
          {projects.map((project, index) => {
            return (
              <Project
                title={project.title}
                description={project.description}
                url={project.url}
                image={project.image}
                key={index}
              />
            );
          })}
        </div>

        <span></span>
      </div>

      <Link
        href="#contact"
        className="p-2 absolute bottom-5 left-5 flex flex-col justify-center items-center text-gray-500"
      >
        <IoChevronDown className="h-7 w-7" />
        <span className="uppercase text-xs">
          Arraste para baixo
        </span>
      </Link>
    </div>
  );
};

export default Projects;
