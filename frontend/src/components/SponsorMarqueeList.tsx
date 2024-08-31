import PlusHostingLogo from '/plus_hosting_logo.svg';

interface Sponsor {
  name: string;
  logo: string;
}

const sponsorsArray = [
  {
    name: 'Plus hosting',
    logo: PlusHostingLogo,
  } as Sponsor,
];

const sponsors = Array<Sponsor[]>(4).fill(sponsorsArray).flat();

export default function SponsorMarqueeList() {
  return (
    <div className="mt-12">
      <div className="relative flex select-none gap-4 overflow-hidden">
        <ul className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_20s_linear_infinite]">
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem key={index} sponsor={sponsor} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_20s_linear_infinite]"
        >
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem key={index} sponsor={sponsor} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function SponsorMarqueeItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <li className="rounded-full bg-white/90">
      <a href="https://plus.hr" className="block px-12 py-6" tabIndex={-1}>
        <img className="h-12 w-auto" src={sponsor.logo} alt={sponsor.name} />
      </a>
    </li>
  );
}
