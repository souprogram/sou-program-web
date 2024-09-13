import SouHeader from './SouHeader';

export default function SectionCompetitions() {
  return (
    <section id="competitions" className="bg-white py-16 text-gray-800 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader heading="Natjecanja" subheading="Join our team" />

        <p className="lg:text-lg lg:leading-relaxed">
          Sudjelovanje na natjecanjima kao što su ICPC, CERC i STEM Games, vrhunac je naših
          godišnjih aktivnosti. Naši timovi pokazali su izvrsnost na ovim prestižnim natjecanjima te
          usput unaprijedili svoje programerske vještine.
        </p>

        <p className="lg:text-lg lg:leading-relaxed">
          Osim što natjecanja nude priliku za unaprjeđenje programerskih vještina članova, ovo je
          prilika za iskusiti nezaboravne trenutke te steći nova prijateljstva. Pridruži nam se u
          ovoj avanturi, gdje učenje i zabava idu ruku pod ruku!
        </p>
      </div>
    </section>
  );
}
