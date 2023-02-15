import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Megaverse from './components/Megaverse';

const queryClient = new QueryClient()

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
