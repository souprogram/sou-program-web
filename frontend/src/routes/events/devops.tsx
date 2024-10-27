import { createFileRoute } from '@tanstack/react-router'
import SPLogoTrasparent from '/sou-program-icon-transparent.svg'
import SouHeader from '@/components/SouHeader'

export const Route = createFileRoute('/events/devops')({
  component: DevOpsEventPage,
})

function DevOpsEventPage() {
  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-0 sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <SouHeader className="text-primary-600" heading="DevOps radionica" subheading="" />

        <div className="flex max-w-screen-sm flex-col">
          <p className="pb-2 lg:text-lg">
            Jesi li se ikad pitao kako velike tech kompanije uspijevaju tako brzo razvijati i
            isporučivati softver?
          </p>

          <p className="pb-2 lg:text-lg">
            Saznaj i pridruži nam se na jednodnevnoj radionici koju vodi iskusni stručnjak Andrea
            Hrelja, Cloud inženjer iz Kern AI-a! Na radionici ćeš steći osnovna znanja o DevOps-u i
            imat ćeš priliku učiti izravno od profesionalca iz industrije.
          </p>

          <div className="pb-2 lg:text-lg">
            <p>📅 26.10.2024.</p>
            <p>🕓 16:00 - 18:00</p>
            <p>📍 FET - učionica 402</p>
          </div>

          <p className="pb-1 lg:text-lg">Sve što ti treba za sudjelovanje: </p>
          <p className="pb-2 lg:text-lg">
            ✔️ Osiguraj si slobodno poslijepodne za 26-tog listopada.
          </p>

          <p className="lg:text-lg">
            Nema potrebe ni za kakvim posebnim znanjima i vještinama - samo malo želje za učenjem i
            dobra volja! Maksimalan broj polaznika je 30. stoga požuri, rezerviraj svoje mjesto i
            krenimo u akciju!
          </p>
        </div>
      </div>
    </section>
  )
}
