import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { DevOpsEventSchema, type DevOpsEventSchemaType } from '../../schemas/DevOpsEventSchema';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface RoboticsEventFormProps {
  onSubmit: (data: DevOpsEventSchemaType) => void;
  isSubmitting?: boolean;
}

export default function RoboticsEventForm({ onSubmit, isSubmitting }: RoboticsEventFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DevOpsEventSchemaType>({
    defaultValues: {
      fullName: '',
      email: '',
    },
    resolver: zodResolver(DevOpsEventSchema),
  });

  const submit = (data: DevOpsEventSchemaType) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-8">
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <Input {...field} id="fullName" label="Ime i prezime" error={errors.fullName} />
          )}
        />

        <div className="flex flex-col gap-8 sm:flex-row">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} id="email" label="Email" error={errors.email} />
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
