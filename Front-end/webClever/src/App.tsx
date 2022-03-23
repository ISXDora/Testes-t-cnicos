import { HealthMetricsContext } from './HealthMetricsContext';
import { GlobalStyles } from './styles/Global';
import { Home } from './views/Home';


function App() {
  return (
    <HealthMetricsContext.Provider value={[]}>
      <GlobalStyles/>
      <Home />
    </HealthMetricsContext.Provider>
  );
}

export default App;
