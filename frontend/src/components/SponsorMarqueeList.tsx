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
      <div className="relative flex select-none gap-4 overflow-hidden">
        <ul className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_20s_linear_infinite]">
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_20s_linear_infinite]"
        >
          {sponsors.map((_, index) => (
            <SponsorMarqueeItem key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
