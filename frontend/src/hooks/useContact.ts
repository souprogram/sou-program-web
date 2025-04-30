import { ContactSchemaType } from '@/schemas/ContactSchema';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

export const useContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: ContactSchemaType) => {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, data);

      if (response.status !== 201) {
        throw new Error('Greška prilikom slanja maila.');
      }
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
    isSubmitting: mutation.isPending,

    isModalOpen: isModalOpen,
    closeModal: () => setIsModalOpen(false),
  };
};
