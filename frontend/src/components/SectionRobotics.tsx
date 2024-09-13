import SouHeader from './SouHeader';
import Button from './ui/Button';

export default function SectionRobotics() {
  return (
    <section id="robotics" className="bg-black py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader
          className="text-primary-600"
          heading="Radionica robotike"
          subheading="We build remote control cars"
        />

        <p className="lg:text-lg lg:leading-relaxed">
          Radionica robotike je projekt Šou programa koji za glavni cilj ima upoznati osnovnoškolce
          od 4. do 8. razreda, s osnovama svijeta STEM-a. Klinci će ovim putem učiti osnove
          programiranja, tehničkog crtanja i robotike, a na kraju će kući ponijeti vlastiti autić na
          daljinsko upravljanje!
        </p>

        <p className="lg:text-lg lg:leading-relaxed">
          Kroz 9 interaktivnih termina koji će se održati tijekom listopada, studenog i prosinca
          2024. godine, djeca će razvijati i vještine rješavanja problema te kreativnog mišljenja, a
          sve to u zabavnoj i poticajnoj atmosferi.
        </p>

        <p className="lg:text-lg lg:leading-relaxed">
          Najbolji dio? Radionice su u potpunosti besplatne! Broj mjesta je ograničen na 30
          polaznika, a prijave su otvorene do … . Zato požurite i osigurajte svoje mjesto!
        </p>

        <p className="lg:text-lg lg:leading-relaxed">
          Detaljnijem programu radionice možete pristupiti{' '}
          <a
            href="/Radionica_robotike_za_djecu_-_Šou_program_2024.pdf"
            className="text-primary-600 hover:text-primary-400"
          >
            ovdje
          </a>
          , a ukoliko imate dodatnih pitanja slobodno nas kontaktirajte na e-mail{' '}
          <a href="mailto:info@souprogram.hr" className="text-primary-600 hover:text-primary-400">
            info@souprogram.hr
          </a>
        </p>

        <div className="mt-6 w-fit">
          <Button to="/events/robotics">Prijave za radionicu robotike</Button>
        </div>
      </div>
    </section>
  );
}
