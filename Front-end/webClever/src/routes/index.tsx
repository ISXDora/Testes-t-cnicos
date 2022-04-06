import React from 'react';
import { Route} from 'react-router-dom';
import { Home } from "../views/Home";
import {Graphics} from "../views/Graphics"


const Routes: React.FC = () => (
    <Routes>
        
      <Route
        path="/" 
        element={ Home }
      />
      <Route 
        path="/graphics" 
        element={ Graphics } />
    
    </Routes>
  );
  
  export default Routes;
  