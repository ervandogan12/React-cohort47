import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContext, DataProvider } from './context/DataContext'; // Correct the casing of the import path
import Nav from './components/Nav';
import AppRoutes from './Routes'; // Adjust the import path based on where you place your Routes.jsx

function App() {
  return (
<DataProvider>
  <Router>
    <Nav />
    <AppRoutes />
  </Router>
</DataProvider>
  );
}

export default App;