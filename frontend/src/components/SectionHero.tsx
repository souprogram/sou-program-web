import Button from './ui/Button';
import SPLogo from '/sou-program-icon.svg';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';
import { useParallax } from '../hooks/useParallax';

export default function SectionHero() {
  const offsetY = useParallax();

  return (
    <section className="relative flex min-h-screen flex-col items-center gap-4 bg-black py-16 md:py-32 lg:py-48">
      <div className="opacity-10">
        <div
          className="absolute inset-0 z-20 sm:left-[-10%] sm:top-[-10%] sm:h-[60rem] sm:w-[60rem]"
          style={{
            transform: `translateY(${offsetY}px)`,
          }}
        >
          <img src={SPLogo} alt="Sou program logo" className="absolute inset-0 opacity-75" />
          <img src={SPLogoTrasparent} alt="Sou program logo" className="absolute inset-0" />
        </div>
      </div>
      <div className="z-10 mx-auto mt-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-brioni text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Još jedna studentska udruga.
        </h1>

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
