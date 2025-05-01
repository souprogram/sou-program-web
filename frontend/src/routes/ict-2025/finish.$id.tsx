import { createFileRoute } from '@tanstack/react-router';
import axios from 'axios';

export const Route = createFileRoute('/ict-2025/finish/$id')({
  component: RouteComponent,
  loader: async ({ params: { id } }) => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/user/${id}`);
    if (response.status !== 200 || !response.data.data.elapsed_time_seconds) {
      throw new Error('Greška prilikom učitavanja korisnika.');
    }
    return response.data.data;
  },
  errorComponent: () => {
    return (
      <div className="flex h-screen items-center justify-center bg-neutral-900">
        <h1 className="text-2xl font-bold text-white">Greška prilikom učitavanja korisnika.</h1>
      </div>
    );
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  console.log(data);

  return <div>Hello "/ict-2025/finish"!</div>;
}
