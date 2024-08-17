export default function SponsorMarqueeItem({
  sponsor,
}: {
  sponsor: { name: string };
}) {
  return (
    <li className="flex shrink-0 grow-0 basis-auto items-center justify-center rounded bg-primary-600 px-8 py-4 text-center text-white">
      <p>{sponsor.name}</p>
    </li>
    // <li className="marquee__item">
    //   <p>{sponsor.name}</p>
    // </li>
  );
}
