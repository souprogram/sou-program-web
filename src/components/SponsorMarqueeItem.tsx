export default function SponsorMarqueeItem({
  sponsor,
}: {
  sponsor: { name: string };
}) {
  return (
    <li className="text-white bg-primary-600 rounded py-4 px-8 text-center grow-0 shrink-0 basis-auto flex justify-center items-center">
      <p>{sponsor.name}</p>
    </li>
    // <li className="marquee__item">
    //   <p>{sponsor.name}</p>
    // </li>
  );
}
