import SouHeader from './SouHeader';
import Button from './ui/Button';

export default function SectionCTA() {
  return (
    <section className="bg-primary-600 py-16 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-black" heading="Jesi li spreman?" subheading="Are you ready?" />

        <div className="flex">
          <Button to="/join" className="bg-black px-8 py-4 text-lg text-white hover:bg-gray-700">
            Učlani se
          </Button>
        </div>
      </div>
    </section>
  );
}
