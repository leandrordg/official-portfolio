import { SocialIcon } from 'react-social-icons';
import { IoSunny } from 'react-icons/io5';

type Props = {};

const Header = ({}: Props) => {
  return (
    <header className="p-2 sm:p-4 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-4">
          <SocialIcon
            url="https://github.com/leandrordg"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/leandro-rodrigues-8aaa19221/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://instagram.com/leandro.rodriguesz"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.facebook.com/leandrorodrigues25/"
            fgColor="gray"
            bgColor="transparent"
          />
        </nav>

        <button className="p-2 text-neutral-500">
          <span className="sr-only">Trocar tema</span>
          <IoSunny className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
};

export default Header;
