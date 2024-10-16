import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { JoinSchemaType } from '@/schemas/JoinSchema';

export function useJoin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutation<JoinSchemaType, AxiosError, JoinSchemaType>({
    mutationFn: async (data: JoinSchemaType) => {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/members`, data);

      if (response.status !== 201) {
        throw new Error('Učlanjivanje nije uspjelo.');
      }

      return data;
    },
    onSuccess: () => {
      setIsModalOpen(true);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    submit: mutation.mutate,
    error: mutation.error,
    isSubmitting: mutation.isPending,
    isModalOpen: isModalOpen,
    closeModal: () => setIsModalOpen(false),
  };
}
