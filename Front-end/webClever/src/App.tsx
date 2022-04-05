import { AppProvider } from './contexts';
import { GlobalStyles } from './styles/Global';
import { Home } from './views/Home';


function App() {
  return (
    <AppProvider>
      <GlobalStyles/>
      <Home />
    </AppProvider>
  );
}

export default App;
