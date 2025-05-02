import { createFileRoute } from '@tanstack/react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/ict-2025/scoreboard')({
  component: RouteComponent,
  loader: async () => {
    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/users`);
    if (response.status !== 200) {
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

  const [scores, setScores] = useState(data);

  const [first, ...rest] = scores;

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/ict-2025/users`);
      if (response.status !== 200) {
        return;
      }

      setScores(response.data.data);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-full bg-neutral-900 pb-16 md:pb-32">
      <div className="overflow-hidden">
        <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
          <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            ICT 2025 Scoreboard
          </h2>
          <div className="flex flex-col gap-2 rounded-lg text-lg text-gray-200">
            {first && (
              <div className="flex items-center justify-between rounded-lg bg-amber-400 p-4 text-black">
                <div className="flex items-center gap-3">
                  <Rank rank={1} />
                  <span>{first.username} 🏆</span>
                </div>
                <span className="font-mono">
                  {Math.floor(first.elapsed_time_seconds / 60)}:
                  {String(first.elapsed_time_seconds % 60).padStart(2, '0')}
                </span>
              </div>
            )}
            {rest &&
              rest.map(
                (user: { username: string; elapsed_time_seconds: number }, index: number) => (
                  <div
                    key={user.username}
                    className="flex items-center justify-between rounded-lg bg-neutral-800 p-4 text-white"
                  >
                    <div className="flex items-center gap-3">
                      <Rank rank={index + 2} />
                      <span>{user.username}</span>
                    </div>
                    <span className="font-mono">
                      {Math.floor(user.elapsed_time_seconds / 60)}:
                      {String(user.elapsed_time_seconds % 60).padStart(2, '0')}
                    </span>
                  </div>
                ),
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

const Rank = ({ rank }: { rank: number }) => {
  return <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-black">{rank}.</span>;
};
