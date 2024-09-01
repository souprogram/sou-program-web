import Button from './ui/Button';

export default function SectionCTA() {
  return (
    <section className="bg-primary-600 py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
          <div>Jesi li spreman?</div>
          <div className="opacity-50">Are you ready?</div>
        </h2>
        <div className="flex">
          <Button
            to="/join"
            className="bg-black px-8 py-4 text-lg text-white hover:bg-gray-700"
          >
            Učlani se
          </Button>
        </div>
      </div>
    </section>
  );
}
