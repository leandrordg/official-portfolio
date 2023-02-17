import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const Project = ({ title, description, url, image }: Props) => {
  return (
    <div className="flex-shrink-0 snap-start flex flex-col border border-neutral-800 rounded-xl overflow-hidden w-full sm:max-w-[500px]">
      <img
        src={image}
        alt={title}
        className="w-full max-w-xl object-cover"
      />

      <div className='p-8'>
        <span className="text-2xl font-bold tracking-widest">{title}</span>
        <p className="text-gray-400 my-4">{description}</p>

        <Link
          href={url}
          className="underline decoration-indigo-600 font-bold tracking-widest"
        >
          Experimentar
        </Link>
      </div>
    </div>
  );
};

export default Project;
