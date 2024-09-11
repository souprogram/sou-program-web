import SouHeader from './SouHeader';
import Button from './ui/Button';

export default function SectionRobotics() {
  return (
    <section id="robotics" className="bg-black py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-primary-600" heading="Robotika" subheading="Pravimo autiće" />

        <p className="text-lg leading-relaxed">
          Naša sekcija robotike nudi jedinstvene radionice namijenjene učenicima osnovnih škola s
          ciljem upoznavanja s osnovama robotike. Sudionici radionica uče kako programirati robote,
          upravljati autićima na daljinski, te se bave kako hardverskim, tako i softverskim
          aspektima izrade i programiranja robota. Kroz interaktivne sesije, djeca razvijaju
          vještine rješavanja problema i kreativnog mišljenja, a sve to u zabavnom i poticajnom
          okruženju.
        </p>
        <div className="mt-6 w-fit">
          <Button to="/events/robotics">Učlani se u robotiku</Button>
        </div>
      </div>
    </section>
  );
}
