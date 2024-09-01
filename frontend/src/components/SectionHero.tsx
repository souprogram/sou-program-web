import { Button } from './ui/Button';
import SPLogo from '/sou-program-icon.svg';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export default function SectionHero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-4 overflow-hidden bg-black py-16 md:py-32 lg:py-48">
      <div className="opacity-10">
        <img
          src={SPLogo}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 opacity-75 sm:left-[25%] sm:top-[-10%] sm:h-[60rem] sm:w-[60rem] 2xl:top-[0%]"
        />
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[25%] sm:top-[-10%] sm:h-[60rem] sm:w-[60rem] 2xl:top-[0%]"
        />
      </div>
      <div className="z-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-brioni text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Još jedna studentska udruga.
        </h1>
        <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Još jedan korak u proširenju naših projekata.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Button to="/join">Učlani se</Button>
          <a href="#what-we-do">
            <Button transparent>Doznaj više</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
