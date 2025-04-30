import ICTSignUpForm from '@/components/forms/ICTSignUpForm';
import { createFileRoute } from '@tanstack/react-router';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const Route = createFileRoute('/ict-2025/sign-up')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:top-0 sm:left-[50%] sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          ICT 2025 natjecanje
        </h2>
        <div className="flex max-w-screen-sm flex-col gap-4 leading-relaxed text-gray-200">
          <p className="font-poppins pb-2 lg:text-lg">
            Prijavi se za sudjelovanje u nadolazećem natjecanju ICT 2025!
          </p>

          <ICTSignUpForm />
        </div>
      </div>
    </section>
  );
}
