import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AppProvider } from './contexts';
import { GlobalStyles } from './styles/Global';
import { Home } from './views/Home';
import { Graphics } from './views/Graphics';
import history from './services/history';


function App() {
  
  return (
    <AppProvider>
        <GlobalStyles/>
        <Router >
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/graphics" element={<Graphics/>}/>
            </Routes>
      </Router>
    </AppProvider>
  );
}


export default App;


    // <AppProvider>
      
    //   <GlobalStyles/>
    //   <Home />
      
    // </AppProvider>