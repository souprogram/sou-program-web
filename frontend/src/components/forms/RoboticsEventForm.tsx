import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { schoolGradeOptions } from '@/data/options';
import { RoboticsEventSchema, type RoboticsEventSchemaType } from '@/schemas/RoboticsEventSchema';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { SingleSelect } from '../ui/Select';
import DateInput from '../ui/DateInput';

interface RoboticsEventFormProps {
  onSubmit: (data: RoboticsEventSchemaType) => void;
  isSubmitting?: boolean;
}

export default function RoboticsEventForm({ onSubmit, isSubmitting }: RoboticsEventFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RoboticsEventSchemaType>({
    defaultValues: {
      fullNameStudent: '',
      dobStudent: '2024-01-01',
      schoolName: '',
      schoolGrade: undefined,
      fullNameCaretaker: '',
      email: '',
      phoneNumber: '',
    },
    resolver: zodResolver(RoboticsEventSchema),
  });

  const submit = (data: RoboticsEventSchemaType) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="flex flex-col gap-8">
        <Controller
          name="fullNameStudent"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="fullNameStudent"
              label="Ime i prezime polaznika"
              error={errors.fullNameStudent}
            />
          )}
        />

        <Controller
          name="dobStudent"
          control={control}
          render={({ field }) => (
            <DateInput
              {...field}
              id="dob"
              label="Datum rođenja polaznika"
              error={errors.dobStudent}
            />
          )}
        />

        <Controller
          name="schoolName"
          control={control}
          render={({ field }) => (
            <Input {...field} id="school" label="Naziv škole" error={errors.schoolName} />
          )}
        />

        <Controller
          name="schoolGrade"
          control={control}
          render={({ field }) => (
            <SingleSelect
              name={field.name}
              label="Razred"
              options={schoolGradeOptions}
              value={[field.value]}
              onChange={field.onChange}
              error={errors.schoolGrade?.message}
            />
          )}
        />

        <Controller
          name="fullNameCaretaker"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              id="fullNameCaretaker"
              label="Ime i prezime skrbnika"
              error={errors.fullNameCaretaker}
            />
          )}
        />

        <div className="flex flex-col gap-8 sm:flex-row">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} id="email" label="Email skrbnika" error={errors.email} />
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
                label="Broj mobitela skrbnika"
                error={errors.phoneNumber}
                onChange={({ target }) => field.onChange(target.value)}
                description="Format: +3859..."
              />
            )}
          />
        </div>

        <div className="flex">
          <Button type="submit" loading={isSubmitting}>
            Pošalji
          </Button>
        </div>
      </div>
    </form>
  );
}
