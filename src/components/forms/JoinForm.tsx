import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { JoinSchema, type JoinSchemaType } from '../../schemas/JoinSchema';
import Select from 'react-select';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import { Role } from '../../Role';

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
    const validatedData = JoinSchema.safeParse(data);

    if (validatedData.success) {
      console.log(validatedData.data);
    } else {
      console.log(validatedData.error.message);
    }

    console.log('Something went wrong');
    // console.log(data);
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
              id="name"
              label="Name"
              required
              {...field}
              error={errors.name}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              id="email"
              label="Email"
              type="email"
              required
              {...field}
              error={errors.email}
            />
          )}
        />

        <Controller
          name="oib"
          control={control}
          render={({ field }) => (
            <Input
              id="oib"
              label="OIB"
              required
              {...field}
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
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-medium text-gray-700">
                Uloga{' '}
                <span className="font-normal text-gray-500">
                  (izaberite barem jednu)
                </span>
                <span className="text-red-600">*</span>
              </label>
              <Select
                id="role"
                required
                isMulti
                aria-label="Select role"
                options={roleOptions}
                value={roleOptions.filter((c) => value.includes(c.value))}
                defaultValue={roleOptions.find(
                  (c) => c.value === Role.PROGRAMER,
                )}
                onChange={(e) => onChange(e.map((c) => c.value))}
              />
            </div>
          )}
        />

        <Controller
          name="discordUsername"
          control={control}
          render={({ field }) => (
            <Input
              id="discordUsername"
              label="Discord username"
              required
              {...field}
              error={errors.discordUsername}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          render={({ field }) => (
            <Input
              id="phoneNumber"
              label="Broj mobitela"
              type="phone"
              required
              {...field}
              error={errors.phoneNumber}
            />
          )}
        />

        <Controller
          name="whereDoYouWork"
          control={control}
          render={({ field }) => (
            <Input
              id="whereDoYouWork"
              label="Gdje stanuju/presjedavaju"
              required
              {...field}
              error={errors.whereDoYouWork}
            />
          )}
        />

        <Controller
          name="terms"
          control={control}
          render={({ field }) => (
            <Checkbox
              id="terms"
              label="I am completely sure that I want to join the community."
              required
              {...field}
              error={errors.terms}
            />
          )}
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="focus:ring-primary-500 inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
