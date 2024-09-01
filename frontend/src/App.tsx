import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainRouter } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  );
}

export default App;
