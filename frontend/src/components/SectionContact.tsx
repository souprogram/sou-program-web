import ContactForm from './forms/ContactForm';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

const SectionContact = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-gray-200 md:py-32">
      {/* <div className="absolute left-2/3 top-[-25rem] z-10 size-[70rem] rounded-full bg-primary-600 opacity-50"></div> */}
      {/* <div className="absolute left-[71%] top-[-25rem] z-20 size-[60rem] animate-[spin_11s_linear_infinite] rounded-[29rem] bg-white opacity-50 md:left-[68.5%]"></div> */}
      {/* <div className="absolute left-2/3 top-[-33rem] z-30 size-[60rem] rounded-full bg-black"></div> */}
      <div className="opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[45%] top-[-10%] z-20 h-[50rem] w-[50rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-sm">
          <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl lg:text-6xl">
            <div>Kontaktiraj nas</div>
            <div className="opacity-50">Budi u dodiru</div>
          </h2>
          <p className="mb-8 text-lg leading-relaxed">
            Javi nam se za bilo kakva pitanja koje imaš. Glupa pitanja ne
            postoje, samo glupi odgovori.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
