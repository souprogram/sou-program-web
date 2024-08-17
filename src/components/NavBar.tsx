import spLogo from '/sp-logo.png';

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block h-10 w-auto"
                src={spLogo}
                alt="Sou program"
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition duration-150 ease-in-out"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
