import JoinForm from './forms/JoinForm';

export default function SectionJoin() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <h2 className="text-4xl mb-4 font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          <span className="md:block">Join the community</span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-500">
          We build the best products and services for the world.
        </p>
        <JoinForm />
      </div>
    </section>
  );
}
