import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const useEventRegistration = <T>(endpoint: string) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: T) => {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/event/${endpoint}`,
        data,
      );

      if (response.status !== 201) {
        throw new Error('Registration failed.');
      }
    },
    onSuccess: () => {
      navigate('/thank-you', { state: { isSubmitted: true } });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return {
    submit: mutation.mutate,
    error: mutation.error,
    isSubmitting: mutation.isPending,
  };
};
