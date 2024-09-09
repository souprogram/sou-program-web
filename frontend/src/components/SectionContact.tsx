import ContactForm from './forms/ContactForm';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { type ContactSchemaType } from '../schemas/ContactSchema';

export default function SectionContact() {
  const mutation = useMutation({
    mutationFn: async (data: ContactSchemaType) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/send-email`,
        data,
      );

      if (response.status !== 201) {
        throw new Error('Greška prilikom slanja maila.');
      }
    },
    onSuccess: () => {
      alert('Uspješno ste poslali mail!');
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

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-sm">
          <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-primary-600 md:text-5xl lg:text-6xl">
            <div>Kontaktiraj nas</div>
            <div className="opacity-50">Budi u dodiru</div>
          </h2>
          <p className="mb-8 text-lg leading-relaxed">
            Javi nam se za bilo kakva pitanja koje imaš. Glupa pitanja ne
            postoje, samo glupi odgovori.
          </p>
          <p className="mb-8 leading-relaxed text-gray-400">Naš email: info@souprogram.hr</p>
          <ContactForm
            onSubmit={mutation.mutate}
            isSubmitting={mutation.isPending}
          />
        </div>
      </div>
    </section>
  );
}
