import SponsorMarqueeList from './SponsorMarqueeList';

export default function SectionSponsors() {
  return (
    <section className="bg-black py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Sponzori
        </h2>
        <p className="text-lg leading-relaxed">
          Htjeli bismo se zahvaliti našim dragim sponzorima koji nam pomažu u razvoju i proširenju
          projekata.
        </p>
      </div>
      <SponsorMarqueeList />
    </section>
  );
}
