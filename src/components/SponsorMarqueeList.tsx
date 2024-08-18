import SponsorMarqueeItem from './SponsorMarqueeItem';

const sponsors = [
  {
    name: 'Google',
  },
  {
    name: 'Paypal',
  },
  {
    name: 'Spotify',
  },
  {
    name: 'Instagram',
  },
  {
    name: 'Behance',
  },
];

export default function SponsorMarqueeList() {
  return (
    <div className="mt-12">
      <div className="enable-animation marquee group relative flex select-none gap-4 overflow-hidden">
        <ul className="marquee__content animation-marquee-scroll group-hover:pause flex min-w-full shrink-0 justify-around gap-4">
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="marquee__content animation-marquee-scroll group-hover:pause flex min-w-full shrink-0 justify-around gap-4"
        >
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
