import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import Input from '../ui/Input';
import { MultiSelect, SingleSelect } from '../ui/Select';
import { roleOptions, studyOptions } from '../../data/options';

interface JoinFormProps {
  onSubmit: (data: JoinSchemaType) => void;
  isSubmitting?: boolean;
}

export default function JoinForm({ onSubmit, isSubmitting }: JoinFormProps) {
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

  const submit = (data: JoinSchemaType) => {
    if (!areTermsAccepted) {
      alert('Moraš prihvatiti sve uvjete i odredbe Statuta.');
      return;
    }

    if (!data.isUNIPUStudent) {
      data.study = undefined;
    }

    onSubmit(data);
  };

  return (
    <form
      className="mx-auto w-full max-w-screen-xl"
      onSubmit={handleSubmit(submit)}
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
          <Button type="submit" disabled={!areTermsAccepted || isSubmitting}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}
