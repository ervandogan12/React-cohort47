import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import {AllCategories} from './components/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><h1>Products</h1><AllCategories /></>} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;