import JoinForm from './forms/JoinForm';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export default function SectionJoin() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-32">
      {/* <div className="absolute inset-0 top-40 z-30 h-[20rem] max-w-7xl -rotate-[70deg] rounded-full bg-primary-600 opacity-20"></div> */}
      {/* <div className="absolute left-2/3 top-[-20rem] z-10 size-[70rem] rounded-full bg-primary-600 opacity-50"></div> */}
      {/* <div className="absolute left-2/3 top-[-30rem] z-20 size-[60rem] animate-[spin_11s_linear_infinite] rounded-[29rem] bg-black"></div> */}
      {/* <div className="absolute left-2/3 top-[calc(100%-30rem)] size-[23rem] animate-[spin_8s_linear_infinite] rounded-[11rem] bg-white opacity-50"></div> */}

      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-10%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-24 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Postani član udruge
        </h2>
        <p className="mb-8 leading-relaxed text-gray-200">
          Ispuni formu i čekaj naš znak za ostale korake (članarina).
        </p>
        <div className="max-w-screen-sm">
          <JoinForm />
        </div>
      </div>
    </section>
  );
}
