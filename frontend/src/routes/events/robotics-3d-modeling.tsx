import Robotics3DModelingForm from '@/components/forms/robotics-3d-modeling-form';
import SouHeader from '@/components/SouHeader';
import { createFileRoute } from '@tanstack/react-router';
import RadionicaRobotikaPDF from '/Radionica_robotike_za_djecu_-_Sou_program_2024.pdf';

export const Route = createFileRoute('/events/robotics-3d-modeling')({
  component: SectionRobotics3DModeling,
});

function SectionRobotics3DModeling() {
  return (
    <section id="robotics" className="bg-neutral-900 py-8 text-gray-200 md:py-16">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader
          className="text-primary-600"
          heading="Radionica robotike i 3D modeliranja"
          subheading="We build remote control cars"
        />

        <p className="max-w-screen-sm pb-2 lg:text-lg">
          Radionica robotike je projekt Šou programa koji za glavni cilj ima upoznati osnovnoškolce
          od 4. do 8. razreda, s osnovama svijeta STEM-a. Klinci će ovim putem učiti osnove
          programiranja, tehničkog crtanja i robotike, a na kraju radionice će biti organizirano
          druženje na kojem će imati priliku igrati se sa autićem koji su sami kreirali.
        </p>

        <p className="max-w-screen-sm pb-2 lg:text-lg">
          Kroz 9 interaktivnih termina koji će se održati tijekom listopada, studenog i prosinca
          2024. godine, djeca će razvijati i vještine rješavanja problema, kreativnog mišljenja te
          rada u timu, a sve to u zabavnoj i poticajnoj atmosferi.
        </p>

        <p className="max-w-screen-sm pb-2 lg:text-lg">
          Projekt je financiran od strane Sveučilišta Jurja Dobrile u Puli, što omogućava da je
          radionica u potpunosti besplatna!
        </p>

        <p className="max-w-screen-sm pb-2 lg:text-lg">
          Detaljnijem programu radionice možete pristupiti{' '}
          <a
            href={RadionicaRobotikaPDF}
            target="_blank"
            className="text-primary-600 hover:text-primary-400"
            rel="noreferrer"
          >
            ovdje
          </a>
          .
        </p>

        <div className="max-w-screen-sm">
          <Robotics3DModelingForm />
        </div>
      </div>
    </section>
  );
}
