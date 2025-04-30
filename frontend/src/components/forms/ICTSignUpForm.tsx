import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import Button from '../ui/Button';
import Input from '../ui/Input';

const SignUpSchema = z.object({
  name: z.string().min(1, 'First name is required'),
  surname: z.string().min(1, 'Last name is required'),
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export default function ICTSignUpForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    defaultValues: {
      name: '',
      surname: '',
      username: '',
      email: '',
    },
    resolver: zodResolver(SignUpSchema),
  });

  const submit = (data: SignUpSchemaType) => {
    console.log('Form submitted:', data);
    alert(`Registration successful! Welcome ${data.username}`);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="max-w-screen-xl">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col gap-8">
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input {...field} id="name" label="Ime" error={errors.name} />}
          />

          <Controller
            name="surname"
            control={control}
            render={({ field }) => (
              <Input {...field} id="surname" label="Prezime" error={errors.surname} />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} id="email" label="Email" error={errors.email} />
            )}
          />

          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="username"
                label="Username"
                error={errors.username}
                description="Ovo je bitno da se tvoje ime prikazuje na scoreboardu"
              />
            )}
          />
        </div>

        <div className="flex items-center justify-between">
          <Button type="submit">Pokreni natjecanje</Button>
        </div>
      </div>
    </form>
  );
}
