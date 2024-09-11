import SouHeader from './SouHeader';

export default function SectionCompetitions() {
  return (
    <section id="competitions" className="bg-white py-16 text-gray-800 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader heading="Natjecanja" subheading="Competitions" />

        <p className="text-lg leading-relaxed">
          Sudjelovanje na natjecanjima kao što su ICPC i Central Europe Regional Contest (CERC) u
          Ljubljani, te STEM games, vrhunac su naših godišnjih aktivnosti. Naši timovi su pokazali
          izvrsnost na ovim prestižnim natjecanjima, gdje osim što unapređuju svoje programerske
          vještine, također uživaju u zabavnim i društvenim aspektima ovih događaja.
        </p>
        <p className="text-lg leading-relaxed">
          Motiviramo sve studente da se prijave, ne samo radi programiranja, već i da iskuse
          nezaboravne trenutke i steknu nova prijateljstva. Pridružite nam se i vi u ovoj avanturi,
          gdje učenje i zabava idu ruku pod ruku!
        </p>
      </div>
    </section>
  );
}
