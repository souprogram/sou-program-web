import DevOpsEventForm from '../../../components/forms/DevOpsEventForm';
import { useEventRegistration } from '../../../hooks/useEventRegistration';
import { DevOpsEventSchemaType } from '../../../schemas/DevOpsEventSchema';
import SPLogoTrasparent from '/sou-program-icon-transparent.svg';

export const DevOpsEventPage = () => {
  const { submit, isSubmitting } = useEventRegistration<DevOpsEventSchemaType>({
    endpoint: 'devops',
  });

  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-20%] sm:h-[60rem] sm:w-[60rem]"
        />
      </div>

      <div className="relative z-50 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <h2 className="mb-4 font-brioni text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
          Prijavi se na DevOps radionicu
        </h2>
        <p className="max-w-screen-sm leading-relaxed text-gray-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem aut ab totam eaque iste nemo
          voluptate velit voluptatum repudiandae exercitationem quos similique aliquid, facere, sint
          voluptas iure minus placeat sequi.
        </p>
        <p className="max-w-screen-sm leading-relaxed text-gray-200">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam labore molestiae,
          libero esse autem consequuntur. Praesentium quis inventore iusto optio quaerat, veniam
          eligendi architecto maiores nesciunt odit eius alias.
        </p>
        <div className="mt-8 flex max-w-screen-sm flex-col gap-6">
          <h3 className="font-brioni text-3xl font-bold text-white">Šta čekaš? Prijavi se!</h3>
          <DevOpsEventForm onSubmit={submit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </section>
  );
};
