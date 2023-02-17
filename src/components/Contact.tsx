import Link from 'next/link';
import { IoChevronUp } from 'react-icons/io5';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Contact = ({}: Props) => {
  return (
    <div className="h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-gray-500 tracking-[15px] text-center underline decoration-indigo-600">
          Contato
        </h2>

        <div className="absolute h-[1000px] w-full left-0 -bottom-20 bg-gradient-to-b from-transparent  to-indigo-600 -z-20" />

        <motion.div
          initial={{
            opacity: 0,
            x: 400,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row items-start sm:space-x-8 my-10"
        >
          <div className="flex justify-between w-full sm:w-fit sm:flex-col sm:space-y-4 mb-4">
            <SocialIcon url="https://github.com/leandrordg" fgColor="white" />
            <SocialIcon
              url="https://www.linkedin.com/in/leandro-rodrigues-8aaa19221/"
              fgColor="white"
            />
            <SocialIcon
              url="https://instagram.com/leandro.rodriguesz"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.facebook.com/leandrorodrigues25/"
              fgColor="white"
            />
          </div>

          <div className="flex flex-col space-y-4 w-full flex-1">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <input
                type="text"
                placeholder="Nome completo"
                className="contactInput"
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="contactInput"
              />
            </div>

            <input type="text" placeholder="Assunto" className="contactInput" />
            <textarea
              placeholder="Mensagem"
              className="contactInput max-h-72"
            />

            <button className="px-6 py-3 bg-indigo-600 hover:opacity-70 rounded-xl w-fit transition">
              Enviar mensagem
            </button>
          </div>
        </motion.div>
      </div>

      <Link
        href="#hero"
        className="p-2 absolute bottom-5 flex flex-col justify-center items-center"
      >
        <IoChevronUp className="h-7 w-7" />
        <span className="uppercase text-xs">Voltar ao início</span>
      </Link>
    </div>
  );
};

export default Contact;
