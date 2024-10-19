import { createFileRoute } from '@tanstack/react-router'
import DevOpsEventForm from '@/components/forms/DevOpsEventForm'
import EventSuccessModal from '@/components/modals/EventSuccessModal'
import { useEventRegistration } from '@/hooks/useEventRegistration'
import { type DevOpsEventSchemaType } from '@/schemas/DevOpsEventSchema'
import SPLogoTrasparent from '/sou-program-icon-transparent.svg'

export const Route = createFileRoute('/events/devops')({
  component: DevOpsEventPage,
})

function DevOpsEventPage() {
  const { submit, isSubmitting, isModalOpen, closeModal } =
    useEventRegistration<DevOpsEventSchemaType>({
      endpoint: 'devops',
    })

  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-0 sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          DevOps radionica
        </h2>
        <div className="flex max-w-screen-sm flex-col gap-4 leading-relaxed text-gray-200">
          <p>
            Jesi li se ikad pitao kako velike tech kompanije uspijevaju tako brzo razvijati i
            isporučivati softver?
          </p>
          <p>
            Saznaj i pridruži nam se na jednodnevnoj radionici koju vodi iskusni stručnjak Andrea
            Hrelja, Cloud inženjer iz Kern AI-a! Na radionici ćeš steći osnovna znanja o DevOps-u i
            imat ćeš priliku učiti izravno od profesionalca iz industrije.
          </p>
          <div>
            <p>Informacije o radionici:</p>
            <p>📅 26.10.2024.</p>
            <p>🕓 16:00 - 18:00</p>
            <p>📍 FET - učionica 402</p>
          </div>
          <p>Sve što ti treba za sudjelovanje: </p>
          <div>
            <p>✔️ Prijavi se do 19.10.2024.</p>
            <p>✔️ Osiguraj si slobodno poslijepodne za 26-tog listopada.</p>
          </div>
          <p>
            Nema potrebe ni za kakvim posebnim znanjima i vještinama - samo malo želje za učenjem i
            dobra volja! Maksimalan broj polaznika je 30. stoga požuri, rezerviraj svoje mjesto i
            krenimo u akciju!
          </p>
        </div>

        <div className="mt-8 flex max-w-screen-sm flex-col gap-4">
          <h3 className="font-brioni text-2xl font-bold text-white sm:text-3xl">Prijavi se!</h3>
          <DevOpsEventForm onSubmit={submit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <EventSuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
