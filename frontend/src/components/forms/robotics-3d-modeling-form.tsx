import {
  Robotics3DModelingSchema,
  Robotics3DModelingSchemaType,
} from '@/schemas/robotics-3d-modeling-schema';
import { sendMail } from '@/utils/sendMail';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';

const defaultValues: Robotics3DModelingSchemaType = {
  fullName: '',
  email: '',
};

const workshopId = 'f83170a0-cf5f-4c88-ba88-6fa887c4a6ea';

export default function Robotics3DModelingForm() {
  const mutation = useMutation({
    mutationFn: async (data: Robotics3DModelingSchemaType) => {
      return await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/workshop-registrations`, {
        workshop_id: workshopId,
        form_data: data,
      });
    },
    onSuccess: () => {},
    onError: (error) => {
      console.error(error);
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Robotics3DModelingSchemaType>({
    defaultValues,
    resolver: zodResolver(Robotics3DModelingSchema),
  });

  const onSubmit = (data: Robotics3DModelingSchemaType) => {
    console.log(data);
    mutation.mutate(data, {
      onSuccess: async () => {
        await sendMail({
          to: data.email,
          subject: 'Prijava na radionicu',
          body: `Pozdrav ${data.fullName},\n\nHvala što ste se prijavili na radionicu "Robotics and 3D Modeling".\n\nSrdačan pozdrav,\nSOu Program Team`,
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
            Pošalji
          </Button>
        </div>
      </div>
    </form>
  );
}
