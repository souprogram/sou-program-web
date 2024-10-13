import JoinForm from '@/components/forms/JoinForm';
import EventSuccessModal from '@/components/modals/EventSuccessModal';
import SouHeader from '@/components/SouHeader';
import { useJoin } from '@/hooks/useJoin';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const Route = createLazyFileRoute('/join')({
  component: JoinPage,
});

function JoinPage() {
  const { submit, isSubmitting, isModalOpen, closeModal, error } = useJoin();

  const memberExists = useMemo(() => {
    if (!error) return false;

    const responseData = error.response?.data as any;
    const errorMessage = responseData.error.details as string;

    if (!errorMessage.includes('Key')) return false;
    if (!errorMessage.includes('already exists.')) return false;

    return true;
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-10%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <SouHeader heading="Postani član udruge" />

        <p className="mb-8 leading-relaxed text-gray-200"></p>
        <div className="max-w-screen-sm">
          <JoinForm onSubmit={submit} isSubmitting={isSubmitting} />

          {memberExists && <p className="mt-4 text-red-500">Već postoji član!</p>}
        </div>
      </div>

      <EventSuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
