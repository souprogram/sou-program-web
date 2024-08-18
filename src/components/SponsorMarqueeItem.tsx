import PlusHostingLogo from '/plus_hosting_logo.svg';

export default function SponsorMarqueeItem() {
  return (
    <li className="bg-primary-600/15">
      <a href="https://plus.hr">
        <img className="h-12 w-auto" src={PlusHostingLogo} alt="Plus hosting" />
      </a>
    </li>
  );
}
