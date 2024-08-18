import { Link } from 'react-router-dom';

export default function SectionHero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-16 md:py-32 lg:py-48">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-brioni text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          <span className="block">
            <span className="opacity-50">Još</span> jedna
          </span>
          <span className="block text-gray-900">
            <span className="opacity-50">studentska</span> udruga
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          The best developer tools for your next project.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            to="/join"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-black shadow-sm duration-300 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Učlani se
          </Link>
          <a
            href="#"
            className="hover:bg-primary-50 inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-primary-500 shadow-sm duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
