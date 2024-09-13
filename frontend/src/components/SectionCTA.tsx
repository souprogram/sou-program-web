import { useParallax } from '../hooks/useParallax';
import SouHeader from './SouHeader';
import Button from './ui/Button';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export default function SectionCTA() {
  const offsetY = useParallax();

  return (
    <section className="relative overflow-hidden bg-primary-600 py-16 md:py-32">
      <div className="opacity-50">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[45%] top-0 z-20 size-[40rem] lg:top-[5%] lg:size-[50rem]"
          style={{
            transform: `translateY(${(offsetY - 950) * 0.8}px)`,
          }}
        />
      </div>
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-black" heading="Jesi li spreman?" subheading="Are you ready?" />

        <div className="flex">
          <Button to="/join" className="bg-black px-8 py-4 text-lg text-white hover:bg-gray-700">
            Učlani se
          </Button>
        </div>
      </div>
    </section>
  );
}
