type Props = {
  name: string;
  level?: number;
  image: string;
};

const Skill = ({ name, level, image }: Props) => {
  return (
    <div className="group relative cursor-pointer">
      <img src={image} alt={name} className="h-24 w-24 sm:w-32 sm:h-32 -z-10 group-hover:bg-gray-700 group-hover:grayscale p-4 rounded-xl transition" />

      <div className="group-hover:opacity-100 bg-white/40 opacity-0 absolute left-0 top-0 h-24 w-24 sm:w-32 sm:h-32 flex justify-center items-center rounded-xl">
        <span className="text-lg sm:text-2xl font-bold text-black">{name}</span>
      </div>
    </div>
  );
};

export default Skill;
