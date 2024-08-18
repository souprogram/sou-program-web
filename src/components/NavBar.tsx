import spLogo from '/sp-logo.png';

export default function NavBar() {
  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-10 w-auto"
                src={spLogo}
                alt="Sou program"
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 font-brioni font-medium leading-5 text-gray-900 transition duration-150 ease-in-out focus:border-primary-700 focus:outline-none"
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
