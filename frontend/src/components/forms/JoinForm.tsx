import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Role } from '../../enums/Role';
import { Study } from '../../enums/Study';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';
import { SingleSelect, MultiSelect } from '../ui/Select';
import axios from 'axios';

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
  { value: Study.DAK, label: 'DAK - Dizajn i audiovizualne komunikacije' },
];

export default function JoinForm() {
  const [isStudent, setIsStudent] = useState(false);
  const [areTermsAccepted, setAreTermsAccepted] = useState(false);

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
      zipCode: '',
      city: '',
    },
    resolver: zodResolver(JoinSchema),
  });

  const onSubmit: SubmitHandler<JoinSchemaType> = async (data) => {
    if (!areTermsAccepted) {
      alert('Moraš prihvatiti sve uvjete i odredbe Statuta.');
      return;
    }

    if (!data.isUNIPUStudent) {
      data.study = undefined;
    }

    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/join`,
      data,
    );
    console.log(response);

    if (response.status === 200) {
      alert('Registracija uspješno završena.');
    } else {
      alert('Registracija nije uspjela.');
    }
  };

  return (
    <form
      className="mx-auto w-full max-w-screen-xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-8">
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
              label="Ja sam UNIPU student (Sveučilište Jurja Dobrile u Puli)"
              onChange={(event) => {
                field.onChange(event.target.checked);
                setIsStudent(event.target.checked);
              }}
            />
          )}
        />

        <div
          className={`w-full transition-all duration-500 ${isStudent ? 'max-h-24 opacity-100' : '-mt-8 max-h-0 opacity-0'}`}
        >
          <Controller
            name="study"
            control={control}
            render={({ field }) => (
              <SingleSelect
                name={field.name}
                label="Studija"
                options={studyOptions}
                value={[field.value]}
                onChange={field.onChange}
                error={errors.study?.message}
              />
            )}
          />
        </div>

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
              description="Format: +3859..."
            />
          )}
        />

        <div className="flex flex-col gap-8 sm:flex-row">
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="zipCode"
                label="Poštanski broj"
                placeholder="Poštanski broj"
                error={errors.zipCode}
              />
            )}
          />

          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="city"
                label="Grad"
                placeholder="Grad"
                error={errors.city}
              />
            )}
          />
        </div>

        <Checkbox
          id="terms"
          value={areTermsAccepted}
          onChange={({ target }) => setAreTermsAccepted(target.checked)}
          label="Prihvačam sve uvjete i odredbe Statuta."
        />

        <div className="flex">
          <Button type="submit" disabled={!areTermsAccepted}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
