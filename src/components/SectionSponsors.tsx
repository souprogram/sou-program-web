import SponsorMarqueeList from './SponsorMarqueeList';

export default function SectionSponsors() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <h2 className="text-4xl mb-4 font-brioni font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Sponsors
        </h2>
        <p className="text-lg leading-relaxed text-gray-500">
          We would like to thank our sponsors for their support.
        </p>
      </div>
      <SponsorMarqueeList />
    </section>
  );
}
