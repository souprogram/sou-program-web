import { Button } from './ui/Button';

export default function SectionHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-black py-16 md:py-32 lg:py-48">
      <div className="absolute inset-0 top-40 h-[20rem] max-w-7xl -rotate-12 rounded-full bg-primary-600 opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/3 size-[28rem] animate-[spin_4s_linear_infinite] rounded-[13rem] bg-white opacity-30"></div>
      <div className="z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-brioni text-5xl font-bold tracking-tight text-gray-100 sm:text-6xl">
          Još jedna studentska udruga.
        </h1>
        <p className="mt-3 font-poppins text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          The best developer tools for your next project.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button to="/join">Učlani se</Button>
          <Button to="#what-we-do" transparent>
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
