import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import {
  RoboticsEventSchema,
  type RoboticsEventSchemaType,
} from '../../schemas/RoboticsEventSchema';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface RoboticsEventFormProps {
  onSubmit: (data: RoboticsEventSchemaType) => void;
  isSubmitting?: boolean;
}

export default function RoboticsEventForm({
  onSubmit,
  isSubmitting,
}: RoboticsEventFormProps) {
  const { handleSubmit, control, formState: { errors } } = useForm<RoboticsEventSchemaType>({
    defaultValues: {
      name: '',
      email: '',
      age: undefined,
      school: '',
      phoneNumber: '',
      zipCode: '',
      city: '',
    },
    resolver: zodResolver(RoboticsEventSchema),
  });

  const submit = (data: RoboticsEventSchemaType) => {
    alert(JSON.stringify(data, null, 2));

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-8">
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
              id="emaail"
              label="Email"
              placeholder="Email roditelja"
              error={errors.email}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <Input
              id="age"
              label="Godina"
              placeholder="Godina"
              value={String(field.value)}
              type='number'
              error={errors.age}
              onChange={({ target }) => field.onChange(Number(target.value))}
            />
          )}
        />

        <Controller
          name="school"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="school"
              label="Škola"
              placeholder="Škola"
              error={errors.school}
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

        <div className="flex items-center justify-between">
          <Button type="submit" loading={isSubmitting}>
            Pošalji
          </Button>
        </div>
      </div>
    </form>
  );
}
