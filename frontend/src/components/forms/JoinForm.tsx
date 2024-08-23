import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import { Role } from '../../enums/Role';
import Select from '../ui/Select';

const roleOptions = [
  { value: Role.PROGRAMER, label: 'Programer' },
  { value: Role.WEB_DEVELOPER, label: 'Web developer' },
  { value: Role.DESIGNER, label: 'Designer' },
  { value: Role.TESTER, label: 'Tester' },
];

export default function JoinForm() {
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
      isStudent: false,
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
          name="isStudent"
          control={control}
          render={({ field }) => (
            <Checkbox {...field} id="isStudent" label="Ja sam student" />
          )}
        />

        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <Select
              name={field.name}
              label="Uloga"
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
