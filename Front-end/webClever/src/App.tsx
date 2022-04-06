import {
  BrowserRouter,
  Routes,
  Route,
} from "react-dom";
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


// <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//     </Routes>
//   </BrowserRouter>,