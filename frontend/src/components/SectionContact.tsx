import ContactForm from './forms/ContactForm';

export const SectionContact = () => {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24">
      <div className="absolute left-2/3 top-[-25rem] z-10 size-[70rem] rounded-full bg-primary-600 opacity-50"></div>
      <div className="absolute left-[72s%] top-[-25rem] z-20 size-[60rem] animate-[spin_11s_linear_infinite] rounded-[29rem] bg-white opacity-50 md:left-[68.5%]"></div>
      <div className="absolute left-2/3 top-[-33rem] z-30 size-[60rem] rounded-full bg-black"></div>
      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl lg:text-6xl">
          <span className="md:block">Contact us</span>{' '}
          <span className="opacity-50 md:block">Get in touch</span>
        </h2>
        <p className="mb-8 max-w-screen-sm leading-relaxed text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum nulla vitae elit sodales facilisis.
        </p>
        <div className="max-w-screen-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
