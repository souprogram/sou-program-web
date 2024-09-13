import SouHeader from './SouHeader';
import SponsorMarqueeList from './SponsorMarqueeList';

export default function SectionSponsors() {
  return (
    <section className="bg-black py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-white" heading="Sponzori" />

        <p className="lg:text-lg lg:leading-relaxed">
          Htjeli bismo se zahvaliti našim dragim sponzorima koji nam pomažu u razvoju i proširenju
          projekata.
        </p>
      </div>
      <SponsorMarqueeList />
    </section>
  );
}
