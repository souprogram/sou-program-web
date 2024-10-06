import SouHeader from './SouHeader';

export default function SectionWhatWeDo() {
  return (
    <section id="what-we-do" className="relative bg-white py-16 text-gray-800 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader heading="Tko smo mi?" subheading="Who are we?" />
        <p className="lg:text-lg">
          Jednom davno, točnije 2022. godine, dvoje odličnih studenata s faksa informatike u Puli
          dobilo je priliku da postanu demonstratori na jednom od kolegija. Bivajući izuzetno
          motivirani, odmah su prihvatili ponuđenu priliku. Osim što su marljivo prenosili znanje
          svojim kolegama, naši dragi demonstratori su htjeli stvoriti opuštenu i prijateljsku
          atmosferu. Tako da su, uz dogovore za demonstrature, počeli padati i dogovori za igranje
          društvenih igara, a rodile su se i ideje za prijavu na gaming natjecanja.
        </p>
        <p className="lg:text-lg">
          I tako, u jednom trenutku, demonstratorica Marija kaže demonstratoru Rafaelu: &quot;Zašto
          ne bismo osnovali udrugu?&quot;, a Rafael će na to: &quot;Da, ovo će biti Šou!&quot;. I
          tako je nastao Šou program!
        </p>
        <p className="lg:text-lg">
          Cilj Šou programa je vrlo jednostavan - zainteresirati mlade ljude za STEM kroz razne
          zabavne aktivnosti. S tim na umu, organiziramo radionice, sudjelujemo u natjecanjima
          kompetitivnog programiranja, radimo u green roomu, idemo na konferencije i još svašta
          nešto.
        </p>{' '}
        <p className="lg:text-lg">
          Ukratko, danas Šou program okuplja studente informatike (i sve kreativne, zainteresirane
          pojedince) kako bi zajedno gradili community koji otvara vrata za osobni te profesionalni
          rast i razvoj svih svoj članova.
        </p>
      </div>
    </section>
  );
}
