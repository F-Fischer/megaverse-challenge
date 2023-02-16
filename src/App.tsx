import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Megaverse from './components/Megaverse';

// This will be the client that will be used for all queries
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Megaverse></Megaverse>
      </div>
    </QueryClientProvider>
  )
}

export default App;
