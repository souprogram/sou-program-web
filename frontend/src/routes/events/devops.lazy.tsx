import { createLazyFileRoute } from '@tanstack/react-router'
import DevOpsEventForm from '@/components/forms/DevOpsEventForm'
import EventSuccessModal from '@/components/modals/EventSuccessModal'
import { useEventRegistration } from '@/hooks/useEventRegistration'
import { type DevOpsEventSchemaType } from '@/schemas/DevOpsEventSchema'
import SPLogoTrasparent from '/sou-program-icon-transparent.svg'

export const Route = createLazyFileRoute('/events/devops')({
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
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-20%] sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          DevOps radionica
        </h2>
        <p className="max-w-screen-sm leading-relaxed text-gray-200">
          Prijavi se na DevOps radionicu i upoznaj se s terminima kao što su
          DevOp, CI/CD i GitHub Actions.
        </p>
        <div className="mt-8 flex max-w-screen-sm flex-col gap-4">
          <h3 className="font-brioni text-2xl font-bold text-white sm:text-3xl">
            Prijavi se!
          </h3>
          <DevOpsEventForm onSubmit={submit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <EventSuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
