import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useParallax } from '../hooks/useParallax';
import Button from './ui/Button';
import { LinkButton } from './ui/LinkButton';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';
import spLogo from '/sou-program-logo-bez-pozadine.png';
import { Link, useNavigate } from '@tanstack/react-router';

const links = [
  { label: 'Tko smo mi?', to: '/#what-we-do' },
  { label: 'Robotika', to: '/#robotics' },
  { label: 'Natjecanja', to: '/#competitions' },
  { label: 'Kontakt', to: '/#contact' },
];

export default function NavBar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { offsetY } = useParallax();

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpened ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpened]);

  return (
    <nav
      className="sticky left-0 right-0 top-0 z-20"
      style={{ backgroundColor: `rgba(28,28, 28, ${offsetY > 100 ? 1 : offsetY / 100})` }}
    >
      <div className="relative z-10 mx-auto max-w-screen-2xl px-0 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex gap-4 xl:gap-24">
            <Link to="/">
              <img className="h-16 w-auto px-4 sm:px-0" src={spLogo} alt="Sou program" />
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {links.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="text-gray-400 transition-all duration-300 hover:text-primary-500"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <LinkButton to="/join" label="Učlani se" />
            <LinkButton
              to="/events/robotics"
              className="bg-gray-200 hover:bg-white"
              label="Prijavi se na robotiku"
            />
          </div>

          <div className="flex sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="p-4 text-gray-400 focus:outline-none"
            >
              {isMenuOpened ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-20 flex h-screen flex-col items-center justify-center space-y-6 bg-black transition-opacity duration-150 sm:hidden ${
          isMenuOpened ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between">
          <Link to="/" className="h-fit px-4" onClick={toggleMenu}>
            <img className="h-16 w-auto" src={spLogo} alt="Sou program" />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="p-4 text-gray-400 focus:outline-none"
          >
            <AiOutlineClose size={30} />
          </button>
        </div>

        <div className="opacity-5">
          <img
            src={SPLogoTransparent}
            alt="Sou program logo"
            className="absolute inset-0 -top-24 z-20 h-[60rem] w-[60rem]"
          />
        </div>

        {links.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            onClick={toggleMenu}
            className="z-30 text-xl text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            {label}
          </Link>
        ))}

        <Button
          className="z-30 mt-8 truncate"
          onClick={() => {
            navigate({ to: '/join' });
            toggleMenu();
          }}
        >
          Učlani se
        </Button>
        <Button
          className="z-30 truncate bg-gray-200 hover:bg-white"
          onClick={() => {
            navigate({ to: '/events/robotics' });
            toggleMenu();
          }}
        >
          Prijavi se na robotiku
        </Button>
      </div>
    </nav>
  );
}
