import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import { Role } from '../../enums/Role';
import { SingleSelect, MultiSelect } from '../ui/Select';
import { useState } from 'react';
import { Study } from '../../enums/Study';

const roleOptions = [
  { value: Role.SOU_LAB, label: 'Šou lab' },
  { value: Role.SOU_PODCAST, label: 'Šou podcast' },
  { value: Role.MARKETING, label: 'Marketing' },
  { value: Role.DESIGNER, label: 'Designer' },
];

const studyOptions = [
  { value: Study.FIPU, label: 'FIPU - Fakultet informatike u Puli' },
  { value: Study.TFPU, label: 'TFPU - Tehnički fakultet u Puli' },
  { value: Study.MAPU, label: 'MAPU - Muzička akademija u Puli' },
  {
    value: Study.FET,
    label: 'FET - Fakultet ekonomije i turizma "Dr. Mijo Mirković" u Puli',
  },
  { value: Study.FPZ, label: 'FPZ - Fakultet prirodne znanosti u Puli' },
  {
    value: Study.FOOZ,
    label: 'FOOZ - Fakultet za odgojne i obrazovne znanosti u Puli',
  },
  { value: Study.FFPU, label: 'FFPU - Filozofski fakultet u Puli' },
  { value: Study.MFPU, label: 'MFPU - Medicinski fakultet u Puli' },
  { value: Study.DAK, label: 'Dizajn i audiovizualne komunikacije' },
];

export default function JoinForm() {
  const [isStudent, setIsStudent] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<JoinSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      oib: '',
      dob: '',
      isUNIPUStudent: false,
      study: undefined,
      role: [],
      discordUsername: '',
      phoneNumber: '',
      placeOfResidence: '',
      terms: false,
    },
    resolver: zodResolver(JoinSchema),
  });

  const onSubmit: SubmitHandler<JoinSchemaType> = (data) => {
    alert(JSON.stringify(data, null, 2));

    // Send data to backend
  };

  return (
    <form
      className="mx-auto w-full max-w-screen-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col space-y-8">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="name"
              label="Ime"
              placeholder="Ime i prezime"
              error={errors.name}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="email"
              label="Email"
              placeholder="Email"
              error={errors.email}
            />
          )}
        />

        <Controller
          name="oib"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="oib"
              label="OIB"
              placeholder="OIB"
              error={errors.oib}
            />
          )}
        />

        <Controller
          name="dob"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="dob"
              label="Datum rođenja"
              type="date"
              placeholder="Datum rođenja"
              error={errors.dob}
            />
          )}
        />

        <Controller
          name="isUNIPUStudent"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              id="isUNIPUStudent"
              label="Ja sam student"
              onChange={(event) => {
                field.onChange(event.target.checked);
                setIsStudent(event.target.checked);
              }}
            />
          )}
        />

        <Controller
          name="study"
          control={control}
          render={({ field }) =>
            isStudent ? (
              <SingleSelect
                name={field.name}
                label="Studija"
                options={studyOptions}
                value={[field.value]}
                onChange={field.onChange}
                error={errors.study?.message}
              />
            ) : (
              <></>
            )
          }
        />

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <MultiSelect
              name={field.name}
              label={
                <>
                  Uloga{' '}
                  <span className="font-normal text-gray-400">
                    (izaberite barem jednu)
                  </span>
                </>
              }
              options={roleOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors.role?.message}
            />
          )}
        />

        <Controller
          name="discordUsername"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="discordUsername"
              label="Discord username"
              placeholder="Discord username"
              error={errors.discordUsername}
              description="Username bez # (hashtag) znaka (kopiraj iz Discorda)"
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              id="phoneNumber"
              name={field.name}
              value={field.value}
              type="tel"
              label="Broj mobitela"
              placeholder="Broj mobitela"
              error={errors.phoneNumber}
              onChange={({ target }) => field.onChange(target.value)}
              description="Mora sadržati međunarodni zapis broja bez razmaka (+3859... za HR)"
            />
          )}
        />

        <Controller
          name="placeOfResidence"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="placeOfResidence"
              label="Mjesto stanovanja"
              placeholder="Mjesto stanovanja"
              error={errors.placeOfResidence}
              description="Naziv grada i država"
            />
          )}
        />

        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              id="terms"
              label="Prihvačam sve uvjete i odredbe Statuta."
              error={errors.terms}
            />
          )}
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 font-medium text-black shadow-sm duration-300 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
