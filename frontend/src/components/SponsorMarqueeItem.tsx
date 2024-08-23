import PlusHostingLogo from '/plus_hosting_logo.svg';

export default function SponsorMarqueeItem() {
  return (
    <li className="rounded-lg bg-white/75">
      <a href="https://plus.hr" className="block px-8 py-4" tabIndex={-1}>
        <img className="h-12 w-auto" src={PlusHostingLogo} alt="Plus hosting" />
      </a>
    </li>
  );
}
