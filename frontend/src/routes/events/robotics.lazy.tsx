import { createLazyFileRoute } from '@tanstack/react-router';
import RoboticsEventForm from '@/components/forms/RoboticsEventForm';
import EventSuccessModal from '@/components/modals/EventSuccessModal';
import { useEventRegistration } from '@/hooks/useEventRegistration';
import { type RoboticsEventSchemaType } from '@/schemas/RoboticsEventSchema';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const Route = createLazyFileRoute('/events/robotics')({
  component: RoboticsEventPage,
});

function RoboticsEventPage() {
  const { submit, isSubmitting, isModalOpen, closeModal } =
    useEventRegistration<RoboticsEventSchemaType>({
      endpoint: 'robotics',
    });

  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-20%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Prijavi se na Robotiku
        </h2>
        <p className="mb-8 max-w-screen-sm leading-relaxed text-gray-200">
          Prijava je otvorena do <strong>12. listopada 2024. godine</strong>. Zato požurite i
          osigurajte svoje mjesto! Broj mjesta je ograničen na <strong>30 polaznika</strong>.
        </p>
        <div className="max-w-screen-sm">
          <RoboticsEventForm onSubmit={submit} isSubmitting={isSubmitting} />
        </div>
      </div>

      <EventSuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
