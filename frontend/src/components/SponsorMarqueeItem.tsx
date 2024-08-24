import PlusHostingLogo from '/plus_hosting_logo.svg';

export default function SponsorMarqueeItem() {
  return (
    <li className="rounded-full bg-white/90">
      <a href="https://plus.hr" className="block px-12 py-6" tabIndex={-1}>
        <img className="h-12 w-auto" src={PlusHostingLogo} alt="Plus hosting" />
      </a>
    </li>
  );
}
