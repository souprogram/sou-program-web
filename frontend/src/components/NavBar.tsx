import { Link } from 'react-router-dom';
import spLogo from '/sou-program-logo-bez-pozadine.png';

export default function NavBar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-10">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 w-full gap-24">
          <div className="flex-shrink-0">
            <Link to="/" className="h-full">
              <img
                className="block h-full w-auto"
                src={spLogo}
                alt="Sou program"
              />
            </Link>
          </div>
          <div className="hidden w-fit py-8 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="px-4 text-gray-400 transition-all duration-300 hover:text-primary-500"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
