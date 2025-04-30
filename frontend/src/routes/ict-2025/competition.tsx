import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ict-2025/competition')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/ict-2025/competition"!</div>;
}
