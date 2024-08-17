import JoinForm from './forms/JoinForm';

export default function SectionJoin() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          <span className="md:block">Postani član udruge</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <JoinForm />
      </div>
    </section>
  );
}
