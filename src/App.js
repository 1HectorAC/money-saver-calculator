import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import SaleCalculator from './pages/SaleCalculator';
import BuyAmountSale from './pages/BuyAmountSale';
import TipCalculator from './pages/TipCalculator';
import NoPage from './pages/NoPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/SaleCalculator" element={<SaleCalculator/>} />
            <Route path="/BuyAmountSale" element={<BuyAmountSale/>} />
            <Route path="/TipCalculator" element={<TipCalculator/>} />
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
