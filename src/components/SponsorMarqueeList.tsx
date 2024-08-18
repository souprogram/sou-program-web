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
      <div className="enable-animation marquee group">
        <ul className="marquee__content animation-marquee-scroll group-hover:pause">
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="marquee__content animation-marquee-scroll group-hover:pause"
        >
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
