import SouHeader from './SouHeader';

export default function SectionWhatWeDo() {
  return (
    <section id="what-we-do" className="relative z-50 bg-white py-16 text-gray-800 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <SouHeader heading="Tko smo mi?" subheading="Who are we?" />

        <p className="lg:text-lg lg:leading-relaxed">
          U Šou programu, naša misija je okupiti strastvene informatičare kako bi zajedno učili,
          družili se i napredovali. Sve je počelo od dvojice studenata čija je inicijativa za
          sudjelovanje u natjecanjima prerasla u ideju o osnivanju udruge. Ubrzo smo proširili naše
          djelovanje, usmjeravajući se na organiziranje specijaliziranih radionica poput Software
          Engineering, Data Science, SPA (strukture podataka i algoritmi) i Cybersecurity.
        </p>

        <p className="lg:text-lg lg:leading-relaxed">
          Dosad su naši članovi sudjelovali u kompetitivnom programiranju, informatičkim radionicama
          i konferencijama, gdje su testirali svoje vještine i proširiti znanja. Uz te aktivnosti,
          stvaramo prilike za osobni i profesionalni razvoj naših članova, promičući zajedništvo i
          timski duh unutar udruge.
        </p>
      </div>
    </section>
  );
}
