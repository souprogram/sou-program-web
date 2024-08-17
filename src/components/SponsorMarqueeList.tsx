import SponsorMarqueeItem from './SponsorMarqueeItem';

export default function SponsorMarqueeList() {
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

  return (
    // <div className="mt-12 overflow-hidden">
    //   <div className="relative flex overflow-hidden select-none gap-4 group">
    //     <ul className="animation-marquee-scroll shrink-0 flex justify-around gap-4 min-w-full group-hover:pause">
    //       {sponsors.map((sponsor, index) => (
    //         <SponsorMarqueeItem sponsor={sponsor} key={index} />
    //       ))}
    //     </ul>

    //     <ul
    //       aria-hidden="true"
    //       className="animation-marquee-scroll shrink-0 flex justify-around gap-4 min-w-full group-hover:pause"
    //     >
    //       {sponsors.map((sponsor, index) => (
    //         <SponsorMarqueeItem sponsor={sponsor} key={index} />
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <div className="mt-12">
      <div className="enable-animation marquee group">
        <ul className="marquee__content animation-marquee-scroll group-hover:pause">
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem sponsor={sponsor} key={index} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
          className="marquee__content animation-marquee-scroll group-hover:pause"
        >
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem sponsor={sponsor} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}
