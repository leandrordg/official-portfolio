import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';

type Props = {};

const About = ({}: Props) => {
  return (
    <div className="h-screen flex items-center justify-center p-6 max-w-7xl mx-auto relative">
      <motion.div
        initial={{
          opacity: 0,
          x: -400,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1 }}
        className="flex flex-col"
      >
        <h2 className="text-lg sm:text-2xl font-semibold uppercase text-gray-500 tracking-[15px] text-center sm:text-left mb-10 underline decoration-indigo-600">
          Sobre mim
        </h2>

        <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-8">
          <img
            src="https://lh3.googleusercontent.com/vLlM_fXxT6z-uuzXVk1J5ym-isz_wdoOWr94-Rx4MLiRJYBvYFUQ-av2eRuw4iwDbHTe3BKkZ75KmkMF6Tg3VR0bD4lQEWjXXUnhFbRnoXgPpdj-rE4kSmcEBLecZsvmG9G-3Uevfb9mbQTWGsenUPMekLuRvIrIhh2esD-UiA2k7fjkE0XJx9SrkUKRuNiSOMl2_CzPQGs7nC30gf5Uez1vyF8cGVXrjz3TqCp1irRt9UzRf6q5jqNrJslBO8XaX022J6t2HRNHHFm24M5j7Dx1vDDCHusZYsNSKNZmxWsgBXBw0tKbouA6UhFhr1qmGu0JWmhRWNpkrY9hkIGDw1jhUu30v75WR5VZz3EoTU_Yok2GoTXkQB5qXgTlXidfV_QrMqazPCTJ2cafBlOjL4TryM4iIpzveB0Tpnn5wZ07OviWI2QiS1H0jSG64a0_66fH_VK3GLCrjcyvF9JF7yQoKEPRmhp5q8GBn6y7Pte2M_IbBaE4LeWxfnk2kDK8QOd7J5zGhRDuNzNdvO72wCHkuCaDgMI-DfaH0JkY9O_uWWRFqIPQNA7RQvgQ7u_U81cmBmWj2KJU65j2TuSNqf0qCWAf4RNly77HnfSkj_93Hz0v_vwZ_90laPEcLmhN43XCqKhHlxuurdzkG5rSpdAOznwlh4GqBUa--QFRFpoQKthcDocGFvkwHI520UAGFiKw6hBzzPsKpEq01hCBJOYmqzWQIy69BuXlLVqEE8xzrPF5n0_zvHGuJxzi4TnGojQeq3jVqQHofw6CaTckh6WVboziM1cCvCmzViWihqKwVqXnpXJkMQ5fVJmJcnrKL7xsR-0NfS8CJu1V1x_cFy4JhFp_4aSNYz1s_3xqtML9eB48Ov89ZhDh16wWFqgJhh1rMNmMltHEnMNOEH4Slv_M1vC4i5RUcD2b_QH8umdG7tq99TzAHJ6WAThsgS3_a3UEJHHgnuPI73ZO-lpYWIQlHDd4fCVPi6NgNOXh35823W-hBRHJXxE=s500-no?authuser=0"
            alt="Perfil"
            className="h-72 w-full sm:w-64 rounded-xl object-cover"
          />
          <div className="flex flex-col mt-8">
            <h1 className="text-3xl font-bold">Afinal, quem sou eu?</h1>
            <span className="text-gray-400">Frontend Developer</span>
            <p className="mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat,
              velit molestiae. Rerum, ex consequuntur quo quas vero ea tenetur
              suscipit cumque totam temporibus recusandae hic aliquam maxime
              provident officiis numquam quod, nam ratione veritatis? Eius,
              debitis quisquam, quos excepturi tempore itaque facilis earum
              aspernatur fugit perspiciatis recusandae quas expedita quasi.
            </p>
          </div>
        </div>
      </motion.div>

      <Link
        href="#skills"
        className="p-2 absolute bottom-5 right-5 flex flex-col justify-center items-center text-gray-500"
      >
        <IoChevronDown className="h-7 w-7" />
        <span className="uppercase text-xs">Arraste para baixo</span>
      </Link>
    </div>
  );
};

export default About;
