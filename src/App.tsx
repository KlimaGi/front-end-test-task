import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import AllItemsPage from './pages/all-items-page';
import SingleItemLearnPage from './pages/single-item-learn-page';
import SingleItemShopPage from './pages/single-item-shop-page';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllItemsPage />} />
          <Route path="learn/:id" element={<SingleItemLearnPage />} />
          <Route path="shop/:id" element={<SingleItemShopPage />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
