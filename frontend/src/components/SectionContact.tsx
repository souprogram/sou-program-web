import ContactForm from './forms/ContactForm';

export const SectionContact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          <span className="md:block">Contact us</span>{' '}
          <span className="opacity-50 md:block">Get in touch</span>
        </h2>
        <p className="mb-8 font-brioni text-lg font-thin leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum nulla vitae elit sodales facilisis.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};
