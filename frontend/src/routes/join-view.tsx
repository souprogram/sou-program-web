import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { zodSearchValidator } from '@tanstack/router-zod-adapter';
import axios from 'axios';
import { memberListSchema, memberListSearchSchema } from '../schemas/JoinSchema';
import { formatDate, optionsWithoutWeekday } from '../utils/formatDate';
import SouHeader from '../components/SouHeader';
import SPLogoTransparent from '/sou-program-icon-transparent.svg';

export const Route = createFileRoute('/join-view')({
  component: MemberListPage,
  validateSearch: zodSearchValidator(memberListSearchSchema),
});

function MemberListPage() {
  const { table_view_access_key } = Route.useSearch();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['join'],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/members?table_view_access_key=${table_view_access_key ?? ''}`,
      );

      if (response.status !== 200) {
        throw new Error('Greška prilikom dohvaćanja podataka.');
      }

      const validated = memberListSchema.safeParse(response.data);

      if (validated.error) {
        throw new Error(validated.error.message);
      }

      return validated.data.data;
    },
  });

  const capitalize = (str?: string | null) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (isPending) {
    return <div className="flex justify-center">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="flex flex-col justify-center">
        <div className="">Error: </div>
        <pre>{error.message}</pre>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8 sm:mb-12">
        <SouHeader heading="Upisani članovi" />
      </div>
      {data.length === 0 ? (
        <div className="relative bg-black text-center text-gray-200">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <img src={SPLogoTransparent} alt="Sou program logo" className="h-[40rem] w-[40rem]" />
          </div>
          <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-8 py-36 sm:px-6 lg:px-8">
            <h3 className="pb-4 font-brioni text-3xl text-white">Nema članova?!</h3>
            <p className="mb-8 leading-relaxed text-gray-400">
              A ništa, nema članova, nema udruge. Zovi likvidatora, gasimo sve.
            </p>
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg text-sm sm:text-base">
          <table className="min-w-full bg-black">
            <thead>
              <tr className="bg-primary-600 text-black">
                <th className="sticky left-0 z-10 p-0">
                  <div className="truncate bg-primary-600 px-4 py-2 text-start shadow">
                    Ime i prezime
                  </div>
                </th>
                <th className="truncate px-6 py-2 text-start">Kreiran (datum)</th>
                <th className="truncate px-6 py-2 text-start">Email</th>
                <th className="truncate px-6 py-2 text-start">OIB</th>
                <th className="truncate px-6 py-2 text-start">Datum rođenja</th>
                <th className="truncate px-6 py-2 text-start">Je li UNIPU Student</th>
                <th className="truncate px-6 py-2 text-start">Sastavnica</th>
                <th className="truncate px-6 py-2 text-start">Uloga</th>
                <th className="truncate px-6 py-2 text-start">Discord username</th>
                <th className="truncate px-6 py-2 text-start">Broj mobitela</th>
                <th className="truncate px-6 py-2 text-start">Grad</th>
                <th className="truncate px-6 py-2 text-start">Potvrđeno (datum)</th>
                <th className="truncate px-6 py-2 text-start">Status članarine</th>
                <th className="truncate px-6 py-2 text-start">Otišao (datum)</th>
                <th className="truncate px-6 py-2 text-start">Datum do članarine</th>
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
                        {member.full_name}
                      </div>
                    </td>
                    <td className="truncate px-6 py-2">{formatDate(member.created_at)}</td>
                    <td className="truncate px-6 py-2">{member.email}</td>
                    <td className="truncate px-6 py-2">{member.oib}</td>
                    <td className="truncate px-6 py-2">
                      {formatDate(member.dob, optionsWithoutWeekday)}
                    </td>
                    <td className="truncate px-6 py-2">{member.is_unipu_student ? 'Da' : 'Ne'}</td>
                    <td className="truncate px-6 py-2">{member.study?.toUpperCase() ?? ''}</td>
                    <td className="truncate px-6 py-2">
                      {capitalize(member.role.join(', ').replace('-', ' '))}
                    </td>
                    <td className="truncate px-6 py-2">{member.discord_username}</td>
                    <td className="truncate px-6 py-2">{member.phone_number}</td>
                    <td className="truncate px-6 py-2">
                      {member.zip_code}, {member.city}
                    </td>
                    <td className="truncate px-6 py-2">{formatDate(member.confirmed_at)}</td>
                    <td className="truncate px-6 py-2">
                      {member.payment_status ? 'Plačeno' : 'Nije plačeno'}
                    </td>
                    <td className="truncate px-6 py-2">{formatDate(member.left_at)}</td>
                    <td className="truncate px-6 py-2">{formatDate(member.payment_date_due)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
