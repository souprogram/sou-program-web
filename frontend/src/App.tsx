import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainRouter } from './router';

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </div>
  );
}
