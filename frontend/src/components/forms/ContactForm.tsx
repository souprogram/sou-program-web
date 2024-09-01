import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  ContactSchema,
  type ContactSchemaType,
} from '../../schemas/ContactSchema';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { TextArea } from '../ui/TextArea';

interface ContactFormProps {
  onSubmit: (data: ContactSchemaType) => void;
  isSubmitting?: boolean;
}

export default function ContactForm({
  onSubmit,
  isSubmitting,
}: ContactFormProps) {
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

  const submit: SubmitHandler<ContactSchemaType> = (data) => {
    alert(JSON.stringify(data, null, 2));

    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
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
          <Button type="submit" disabled={isSubmitting}>
            Pošalji
          </Button>
        </div>
      </div>
    </form>
  );
}
