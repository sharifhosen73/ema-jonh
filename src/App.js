import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/shop/products/Products';
import SingleProduct from './pages/shop/singleProduct/SingleProduct';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route path='/products' element={<Products />} />
          <Route path='/singleproduct' element={<SingleProduct />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
