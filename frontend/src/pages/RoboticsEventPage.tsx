import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';
import RoboticsEventForm from '../components/forms/RoboticsEventForm';
import { type RoboticsEventSchemaType } from '../schemas/RoboticsEventSchema';
import { useNavigate } from 'react-router';

export const RoboticsEventPage = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: RoboticsEventSchemaType) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/event/robotics`,
        data,
      );

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
    <section className="relative overflow-hidden bg-black py-16 md:py-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-20%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-24 sm:px-6 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Učlani se u Robotiku
        </h2>
        <p className="mb-8 leading-relaxed text-gray-200">
          Ispuni formu i čekaj naš znak za ostale korake (članarina).
        </p>
        <div className="max-w-screen-sm">
          <RoboticsEventForm
            onSubmit={mutation.mutate}
            isSubmitting={mutation.isPending}
          />

        </div>
      </div>
    </section>
  );
}
