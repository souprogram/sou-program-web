import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import JoinForm from '../components/forms/JoinForm';
import SouHeader from '../components/SouHeader';
import { type JoinSchemaType } from '../schemas/JoinSchema';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const JoinPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: JoinSchemaType) => {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/join`, data);

      if (response.status !== 201) {
        throw new Error('Učlanjivanje nije uspjelo.');
      }
    },
    onSuccess: () => {
      navigate('/thank-you');
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-10%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <SouHeader heading="Postani član udruge" />

        <p className="mb-8 leading-relaxed text-gray-200">
          Ispuni formu i čekaj naš znak za ostale korake (članarina).
        </p>
        <div className="max-w-screen-sm">
          <JoinForm onSubmit={mutation.mutate} isSubmitting={mutation.isPending} />
        </div>
      </div>
    </section>
  );
};
