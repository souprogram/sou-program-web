import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import { Role } from '../../Role';
import Select from '../ui/Select';
import PhoneNumber from '../ui/PhoneNumber';

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
      whereDoYouWork: '',
      terms: false,
    },
    reValidateMode: 'onSubmit',
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
              label="Name"
              placeholder="Ime"
              required
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
              type="email"
              placeholder="Email"
              required
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
              required
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
              required
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
              required
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
              required
              error={errors.discordUsername}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <PhoneNumber
              label="Broj mobitela"
              placeholder="Broj mobitela"
              value={field.value}
              onChange={field.onChange}
              required
              error={errors.phoneNumber}
            />
          )}
        />

        <Controller
          name="whereDoYouWork"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="placeOfResidence"
              label="Mjesto stanovanja"
              placeholder="Mjesto stanovanja"
              required
              error={errors.whereDoYouWork}
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
              label="I am completely sure that I want to join the community."
              required
              error={errors.terms}
            />
          )}
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
