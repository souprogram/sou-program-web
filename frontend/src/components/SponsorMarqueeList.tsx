import PlusHostingLogo from '/plus_hosting_logo.svg'

interface Sponsor {
  name: string
  logo: string
  link: string
}

const sponsorsArray = [
  {
    name: 'Plus hosting',
    logo: PlusHostingLogo,
    link: 'https://plus.hr',
  } as Sponsor,
]

const sponsors = Array<Sponsor[]>(4).fill(sponsorsArray).flat()

export default function SponsorMarqueeList() {
  return (
    <div className="mt-12">
<<<<<<< Updated upstream
      <div className="relative flex select-none gap-4 overflow-hidden">
        <ul className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_30s_linear_infinite]">
=======
      <div className="relative flex gap-4 overflow-hidden select-none">
        <ul className="group flex min-w-full shrink-0 [animation:scroll_20s_linear_infinite] justify-around gap-6">
>>>>>>> Stashed changes
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem key={index} sponsor={sponsor} />
          ))}
        </ul>

        <ul
          aria-hidden="true"
<<<<<<< Updated upstream
          className="group flex min-w-full shrink-0 justify-around gap-6 [animation:scroll_30s_linear_infinite]"
=======
          className="group flex min-w-full shrink-0 [animation:scroll_20s_linear_infinite] justify-around gap-6"
>>>>>>> Stashed changes
        >
          {sponsors.map((sponsor, index) => (
            <SponsorMarqueeItem key={index} sponsor={sponsor} />
          ))}
        </ul>
      </div>
    </div>
  )
}

function SponsorMarqueeItem({ sponsor }: { sponsor: Sponsor }) {
  return (
    <li className="rounded-full bg-gray-200">
      <a href={sponsor.link} className="block px-12 py-6" tabIndex={-1}>
        <img className="h-12 w-auto" src={sponsor.logo} alt={sponsor.name} />
      </a>
    </li>
  )
}
