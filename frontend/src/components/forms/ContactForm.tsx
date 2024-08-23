import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactSchema,
  type ContactSchemaType,
} from '../../schemas/ContactSchema';
import Input from '../ui/Input';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/Button';

export default function ContactForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    reValidateMode: 'onSubmit',
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = (data) => {
    alert(JSON.stringify(data, null, 2));

    // Send data to backend
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-screen-xl"
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
              placeholder="Ime"
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
          name="message"
          control={control}
          render={({ field }) => (
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Poruka
              </label>
              <textarea
                id="message"
                placeholder="Poruka"
                className={twMerge(
                  'mt-1 block w-full rounded-md bg-gray-600/30 px-4 py-2 outline-none duration-300 focus:bg-primary-600/30 sm:text-sm',
                  errors.message && 'focus:bg-red-600/30',
                  field.disabled && 'pointer-events-none opacity-50',
                )}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                aria-describedby={`message-error`}
                aria-disabled={field.disabled}
              ></textarea>
              {errors.message?.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message?.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex items-center justify-between">
          <Button type="submit">Pošalji</Button>
        </div>
      </div>
    </form>
  );
}
