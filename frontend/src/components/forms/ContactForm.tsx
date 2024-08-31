import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ContactSchema,
  type ContactSchemaType,
} from '../../schemas/ContactSchema';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { TextArea } from '../ui/TextArea';

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
            <TextArea
              id="message"
              {...field}
              label="Poruka"
              placeholder="Poruka"
              error={errors.message}
            />
          )}
        />

        <div className="flex items-center justify-between">
          <Button type="submit">Pošalji</Button>
        </div>
      </div>
    </form>
  );
}
