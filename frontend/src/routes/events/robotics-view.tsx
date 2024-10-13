import SouHeader from '@/components/SouHeader';
import { TransparentLinkButton } from '@/components/ui/LinkButton';
import { memberListSearchSchema, roboticsMemberListSchema } from '@/schemas/RoboticsEventSchema';
import { formatDate, optionsWithoutWeekday } from '@/utils/formatDate';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import axios from 'axios';
import { HiArrowLeft } from 'react-icons/hi';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export const Route = createFileRoute('/events/robotics-view')({
  component: RoboticsMemberListPage,
  validateSearch: zodSearchValidator(memberListSearchSchema),
});

function RoboticsMemberListPage() {
  const { table_view_access_key } = Route.useSearch();

  const { data, isPending, isError } = useQuery({
    queryKey: ['robotics'],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/events/robotics?table_view_access_key=${table_view_access_key ?? ''}`,
      );

      if (response.status !== 200) {
        throw new Error('Greška prilikom dohvaćanja podataka.');
      }

      const validated = roboticsMemberListSchema.safeParse(response.data);

      if (validated.error) {
        throw new Error(validated.error.message);
      }

      return validated.data.data;
    },
  });

  const capitalize = (str?: string | null) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  if (isPending) {
    return <div className="flex justify-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center">
        <div className="relative bg-black text-center text-gray-200">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img src={SPLogoTransparent} alt="Sou program logo" className="h-[40rem] w-[40rem]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
            <h3 className="pb-4 font-brioni text-3xl text-white">Vrati se nazad.</h3>
            <div className="flex justify-center">
              <TransparentLinkButton
                to="/"
                icon={<HiArrowLeft />}
                label="Nazad na početnu stranicu"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8 sm:mb-12">
        <SouHeader heading="Upisani klinci" />
      </div>
      {data.length === 0 ? (
        <div className="relative bg-black text-center text-gray-200">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img src={SPLogoTransparent} alt="Sou program logo" className="h-[40rem] w-[40rem]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
            <h3 className="pb-4 font-brioni text-3xl text-white">Nema članova?!</h3>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg text-sm sm:text-base">
          <div className="sticky left-0">
            <p className="pb-4">
              Trenutno su prijavljeni <span className="font-bold">{data.length} članova.</span>
            </p>
          </div>
          <table className="min-w-full bg-black">
            <thead>
              <tr className="bg-primary-600 text-black">
                <th className="sticky left-0 z-10 p-0">
                  <div className="truncate bg-primary-600 px-4 py-2 text-start shadow">
                    Ime i prezime
                  </div>
                </th>
                <th className="truncate px-6 py-2 text-start">Kreiran (datum)</th>
                <th className="truncate px-6 py-2 text-start">Datum rođenja</th>
                <th className="truncate px-6 py-2 text-start">Škola</th>
                <th className="truncate px-6 py-2 text-start">Razred</th>
                <th className="truncate px-6 py-2 text-start">Puno ime skrbnika</th>
                <th className="truncate px-6 py-2 text-start">Email skrbnika</th>
                <th className="truncate px-6 py-2 text-start">Broj mobitela skrbnika</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((member) => (
                  <tr
                    key={member.id}
                    className="group bg-gray-800 even:bg-gray-700 hover:bg-gray-600"
                  >
                    <td className="sticky left-0 z-10 p-0">
                      <div className="truncate bg-gray-800 px-4 py-2 shadow group-even:bg-gray-700 group-hover:bg-gray-600">
                        {member.full_name_student}
                      </div>
                    </td>
                    <td className="truncate px-6 py-2">{formatDate(member.created_at)}</td>
                    <td className="truncate px-6 py-2">
                      {formatDate(member.dob_student, optionsWithoutWeekday)}
                    </td>
                    <td className="truncate px-6 py-2">{capitalize(member.school_name)}</td>
                    <td className="truncate px-6 py-2">{capitalize(member.school_grade)}</td>
                    <td className="truncate px-6 py-2">{capitalize(member.full_name_caretaker)}</td>
                    <td className="truncate px-6 py-2">{member.email_caretaker}</td>
                    <td className="truncate px-6 py-2">{member.phone_number_caretaker}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
