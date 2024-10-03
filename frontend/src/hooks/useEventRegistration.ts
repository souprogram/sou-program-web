import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router';

interface EventRegistrationProps {
  endpoint: string;
}

export const useEventRegistration = <EventData>({ endpoint }: EventRegistrationProps) => {
  const navigate = useNavigate();

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
      const successState = { isSubmitted: true };
      navigate('/thank-you', { state: successState });
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
