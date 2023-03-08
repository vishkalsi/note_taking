import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesPages from './routes';


const App = () => (
  <Router>
    <div className="App">
      <RoutesPages />
    </div>
  </Router>
);

export default App;
