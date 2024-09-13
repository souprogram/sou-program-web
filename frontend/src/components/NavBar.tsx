import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParallax } from '../hooks/useParallax';
import Button from './ui/Button';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';
import spLogo from '/sou-program-logo-bez-pozadine.png';

const links = [
  { label: 'Tko smo mi?', to: '/#what-we-do' },
  { label: 'Robotika', to: '/#robotics' },
  { label: 'Natjecanja', to: '/#competitions' },
  { label: 'Kontakt', to: '/#contact' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const offsetY = useParallax();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      className="sticky left-0 right-0 top-0 z-[100]"
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
            <Link to="/join">
              <Button className="truncate">Učlani se</Button>
            </Link>
            <Link to="/events/robotics">
              <Button className="truncate bg-gray-200 hover:bg-white">
                Prijavi se na robotiku
              </Button>
            </Link>
          </div>

          <div className="flex sm:hidden">
            <button onClick={toggleMenu} className="p-4 text-gray-400 focus:outline-none">
              {isOpen ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-20 flex h-screen flex-col items-center justify-center space-y-6 bg-black transition-opacity duration-150 sm:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between">
          <Link to="/" className="h-fit px-4" onClick={toggleMenu}>
            <img className="h-16 w-auto" src={spLogo} alt="Sou program" />
          </Link>

          <button onClick={toggleMenu} className="p-4 text-gray-400 focus:outline-none">
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
        <Link to="/join" onClick={toggleMenu} className="z-30">
          <Button className="mt-8 truncate">Učlani se</Button>
        </Link>
        <Link to="/events/robotics" onClick={toggleMenu} className="z-30">
          <Button className="truncate bg-gray-200 hover:bg-white">Prijavi se na robotiku</Button>
        </Link>
      </div>
    </nav>
  );
}
