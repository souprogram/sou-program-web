import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

interface EventRegistrationProps {
  endpoint: string;
}

export const useEventRegistration = <EventData>({ endpoint }: EventRegistrationProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: EventData) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/events/${endpoint}`,
        data,
      );

      if (response.status !== 201) {
        throw new Error('Registration failed.');
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
    error: mutation.error,
    isSubmitting: mutation.isPending,
    isModalOpen: isModalOpen,
    closeModal: () => setIsModalOpen(false),
  };
};
