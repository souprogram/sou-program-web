import Button from './ui/Button';

const SectionCTA = () => {
  return (
    <section className="bg-primary-600 py-16 text-gray-200 md:py-24">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
          <span className="md:block">Jesi li spreman?</span>
          <span className="opacity-50 md:block">Are you ready?</span>
        </h2>
        <div className="flex">
          <Button
            to="/join"
            className="bg-black px-8 py-4 text-lg text-white hover:bg-gray-800"
          >
            Učlani se
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
