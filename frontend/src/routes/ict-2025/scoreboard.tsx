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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-full bg-neutral-900 pb-16">
      <div className="absolute inset-0 z-100 bg-neutral-900">
        <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 pb-16 sm:px-6 sm:pt-24 lg:px-8">
          <h2 className="font-brioni mb-4 text-4xl leading-none font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-primary-600">Let'sGrow! 2025</span> Scoreboard
          </h2>
          {scores.length === 0 && (
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-neutral-800 py-32">
              <h1 className="text-2xl font-bold text-white">Nema natjecatelja 😞</h1>
              <h2 className="text-lg font-medium text-white">
                Budi prvi i osvoji bolesnu nagradu! 🏆
              </h2>
            </div>
          )}
          <div className="flex flex-col gap-2 rounded-lg text-lg text-gray-200">
            {first && (
              <div className="flex items-center justify-between rounded-lg bg-amber-400 p-4 text-black">
                <div className="flex items-center gap-3">
                  <Rank rank={1} />
                  <span>{first.username} 🏆</span>
                </div>
                <Time seconds={first.elapsed_time_seconds} />
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
                    <Time seconds={user.elapsed_time_seconds} />
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

const Time = ({ seconds }: { seconds: number }) => {
  if (!seconds) {
    return <span className="font-mono">...</span>;
  }

  return (
    <span className="font-mono">
      {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
    </span>
  );
};
