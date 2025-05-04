import Button from '@/components/ui/Button';
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
  const elapsedSeconds = data.elapsed_time_seconds;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');

    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <section className="relative h-full bg-neutral-900 pb-16">
      <div className="overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-16 lg:px-8">
          <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-primary-600">Let'sGrow! 2025</span> Natjecanje
          </h2>
          <div className="flex flex-col gap-2 rounded-xl bg-neutral-800 p-4 py-16 text-center leading-relaxed text-gray-200">
            <p className="font-poppins pb-2 lg:text-lg">Bravo! Riješio/la si sve u </p>
            <span className="mx-auto rounded-lg bg-amber-400 px-4 py-2 font-mono text-lg font-medium text-black">
              {formatTime(elapsedSeconds)}
            </span>

            <p className="font-poppins pb-2 lg:text-lg">Prati scoreboard za nagradu!</p>
          </div>

          <Button to="/ict-2025/sign-up" className="mt-4 w-fit">
            Nazad na prijavu
          </Button>
        </div>
      </div>
    </section>
  );
}
