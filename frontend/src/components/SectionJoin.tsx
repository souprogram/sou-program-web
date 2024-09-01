import JoinForm from './forms/JoinForm';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { type JoinSchemaType } from '../schemas/JoinSchema';

export default function SectionJoin() {
  const mutation = useMutation({
    mutationFn: async (data: JoinSchemaType) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/join`,
        data,
      );

      if (response.status !== 201) {
        throw new Error('Učlanjivanje nije uspjelo.');
      }
    },
    onSuccess: () => {
      alert('Uspješno ste se učlanili!');
    },
    onError: (error) => {
      alert('Greška prilikom učlanjanja.');
      console.error(error);
    },
  });

  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-10%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-24 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Postani član udruge
        </h2>
        <p className="mb-8 leading-relaxed text-gray-200">
          Ispuni formu i čekaj naš znak za ostale korake (članarina).
        </p>
        <div className="max-w-screen-sm">
          <JoinForm
            onSubmit={mutation.mutate}
            isSubmitting={mutation.isPending}
          />
        </div>
      </div>
    </section>
  );
}
