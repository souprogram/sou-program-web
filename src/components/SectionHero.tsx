export default function SectionHero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-4 py-16 md:py-32 lg:py-48">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold font-brioni tracking-tight text-gray-900 sm:text-6xl">
          <span className="block">
            <span className="text-gray-500">Još</span> jedna
          </span>
          <span className="block text-gray-900">
            <span className="text-gray-500">studentska</span> udruga
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          The best developer tools for your next project.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Učlani se
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
