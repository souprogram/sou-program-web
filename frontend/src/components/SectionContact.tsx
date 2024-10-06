import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { type ContactSchemaType } from '@/schemas/ContactSchema';
import ContactForm from './forms/ContactForm';
import EmailSentSuccessModal from './modals/EmailSentSuccessModal';
import SouHeader from './SouHeader';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export default function SectionContact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mutation = useMutation({
    mutationFn: async (data: ContactSchemaType) => {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, data);

      if (response.status !== 201) {
        throw new Error('Greška prilikom slanja maila.');
      }
    },
    onSuccess: () => {
      setIsModalOpen(true);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 text-gray-200 md:py-32"
    >
      <div className="opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[45%] top-[-10%] z-20 h-[50rem] w-[50rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-sm">
          <SouHeader
            className="text-primary-600"
            heading="Kontaktiraj nas"
            subheading="Budi u dodiru"
          />

          <p className="mb-2 mt-4 lg:text-lg lg:leading-relaxed">
            Javi nam se za bilo kakva pitanja koje imaš. Glupa pitanja ne postoje, samo glupi
            odgovori.
          </p>

          <p className="mb-8 text-sm text-gray-400 md:text-base lg:leading-relaxed">
            Naš email:{' '}
            <a href="mailto:info@souprogram.hr" className="text-primary-400 hover:text-primary-200">
              info@souprogram.hr
            </a>
          </p>
          <ContactForm onSubmit={mutation.mutate} isSubmitting={mutation.isPending} />
        </div>
      </div>

      <EmailSentSuccessModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
