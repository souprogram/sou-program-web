import SouHeader from '@/components/SouHeader';
import SponsorMarqueeList from '@/components/SponsorMarqueeList';

export default function SectionSponsors() {
  return (
    <section className="bg-black py-16 text-gray-300 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-white" heading="Sponzori" />

        <p className="lg:text-lg">Hvala našim sponzorima na podršci i povjerenju!</p>
      </div>

      <SponsorMarqueeList />
    </section>
  );
}
