import { Link } from 'react-router-dom';
// import spLogo from '/sp-logo.png';
import spLogo from '/sou-program-logo-black.svg';
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
          <div className="hidden w-fit sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/"
              className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-brioni font-medium leading-5 text-white transition duration-150 ease-in-out hover:text-primary-500 focus:text-primary-700 focus:outline-none"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
